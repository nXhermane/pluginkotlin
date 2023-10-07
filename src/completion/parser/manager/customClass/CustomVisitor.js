import antlr4 from 'antlr4';
import KotlinParserVisitor from './../../antlr4_res/KotlinParserVisitor.js';
import {
	Body,
	ImportStructure,
	ClassStructure,
	FunctionStructure,
	PropertyStructure,
	Parameter
} from './dataStructure.js';

export default class CustomVisitor extends KotlinParserVisitor {
	constructor() {
		super();
		this.currentFunction = null;
		this.currentClass = null;
		this.classStack = [];
		this.functionStack = [];
		this.importInfo = [];
		this.classDeclarationInfo = [];
		this.functionDeclarationInfo = [];
		this.variableDeclarationInfo = [];
	}

	visitKotlinFile(ctx) {
		console.log("Visite du fichier Kotlin");
		return this.visitChildren(ctx);
	}

	visitImportList(ctx) {
		ctx.importHeader().forEach((header) => {
			const importOrigin = header.identifier().getText();
			const importkeyword = importOrigin.split('.').filter((e) => e !== "*");
			const importAlias = header.importAlias()?.getText();
			const isAlias = !!importAlias;
			const importObjet = new ImportStructure(importkeyword);
			importObjet.isAlias = isAlias;
			importObjet.importOrigin = importOrigin;
			importObjet.importAlias = importAlias;
			this.importInfo.push(importObjet);
		});
		return this.visitChildren(ctx);
	}

	visitClassDeclaration(ctx) {
		const className = ctx.simpleIdentifier().getText();
		const newClass = new ClassStructure(className);
		this.currentClass
			? this.currentClass?.body.classDeclaration.push(newClass)
			: this.classDeclarationInfo.push(newClass);
		this.currentClass = newClass;
		this.classStack.push(newClass);
		const result = this.visitChildren(ctx);
		this.classStack.pop();
		this.currentClass = this.classStack.length > 0 ? this.classStack[this.classStack.length - 1] : null;
		return result;
	}

	visitClassParameters(ctx) {
		ctx.classParameter().forEach((param) => {
			const parameter = new Parameter(param.simpleIdentifier().getText());
			parameter.type = param.type_().getText();
			this.currentClass.parameters.push(parameter);
		});
		return this.visitChildren(ctx);
	}

	visitFunctionDeclaration(ctx) {
		const functionName = ctx.simpleIdentifier().getText();
		const returnType = ctx.type_()?.getText() || "void";
		const newFunction = new FunctionStructure(functionName);
		newFunction.returnType = returnType;
		this.currentFunction
			? this.currentFunction.body.functionDeclaration.push(newFunction)
			: this.functionDeclarationInfo.push(newFunction);
		if (this.currentClass) {
			this.currentClass.body.functionDeclaration.push(newFunction);
		}
		this.currentFunction = newFunction;
		this.functionStack.push(newFunction);
		const result = this.visitChildren(ctx);
		this.functionStack.pop();
		this.currentFunction = this.functionStack.length > 0 ? this.functionStack[this.functionStack.length - 1] : null;
		return result;
	}

	visitFunctionValueParameters(ctx) {
		return this.visitChildren(ctx);
	}

	visitFunctionValueParameter(ctx) {
		const paramName = ctx.parameter().simpleIdentifier().getText();
		const paramType = ctx.parameter().type_().getText();
		const newParam = new Parameter(paramName);
		newParam.type = paramType;
		if (this.currentFunction) {
			this.currentFunction.parameters.push(newParam);
		}
		return this.visitChildren(ctx);
	}

	visitPropertyDeclaration(ctx) {
		const mutable = ctx.VAR();
		const isMutable = !!mutable;
		this.currentProperty = new PropertyStructure("");
		this.currentProperty.isMutable = isMutable;
		return this.visitChildren(ctx);
	}

	visitVariableDeclaration(ctx) {
		const variableName = ctx.simpleIdentifier().getText();
		const variableType = ctx.type_()?.getText();
		this.currentProperty.name = variableName;
		this.currentProperty.type = variableType;
		if (this.currentFunction) this.currentFunction.body.variableDeclaration.push(this.currentProperty);
		if (this.currentClass) this.currentClass.body.variableDeclaration.push(this.currentProperty);
		if (!this.currentFunction && !this.currentClass) this.variableDeclarationInfo.push(this.currentProperty);
		return this.visitChildren(ctx);
	}
}