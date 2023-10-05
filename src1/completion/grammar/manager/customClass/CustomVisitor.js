"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AbstractParseTreeVisitor_1 = require("antlr4ts/tree/AbstractParseTreeVisitor");
// Import d'une structure de données
const dataStructure_1 = require("./dataStructure");
class CustomVisitor extends AbstractParseTreeVisitor_1.AbstractParseTreeVisitor {
    constructor() {
        super(...arguments);
        this.classStack = [];
        this.functionStack = [];
        this.importIdentifierInfo = [];
        this.classDeclarationInfo = [];
        this.functionDeclarationInfo = [];
        this.variableDeclarationInfo = [];
    }
    defaultResult() {
        return 0;
    }
    aggregateResult(aggregate, nextResult) {
        return aggregate + nextResult;
    }
    visitImportList(ctx) {
        const importHeader = ctx.importHeader();
        importHeader.forEach(header => {
            var _a;
            const importOrigin = header.identifier().text;
            const importkeyword = importOrigin.split('.').filter(e => e !== "*");
            const importAlias = (_a = header.importAlias()) === null || _a === void 0 ? void 0 : _a.text;
            const isAlias = importAlias ? true : false;
            const importObjet = new dataStructure_1.ImportStructure(importkeyword);
            importObjet.isAlias = isAlias;
            importObjet.importOrigin = importOrigin;
            importObjet.importAlias = importAlias;
            this.importIdentifierInfo.push(importObjet);
        });
        return this.visitReturn(ctx);
    }
    ;
    visitClassDeclaration(ctx) {
        var _a;
        const className = ctx.simpleIdentifier().text;
        console.log(className);
        let newClass = new dataStructure_1.ClassStructure(className);
        this.currentClass ? (_a = this.currentClass) === null || _a === void 0 ? void 0 : _a.body.classDeclaration.push(newClass) :
            this.classDeclarationInfo.push(newClass);
        this.currentClass = newClass;
        this.classStack.push(newClass);
        const result = this.visitReturn(ctx);
        this.classStack.pop();
        this.currentClass = this.classStack.length > 0 ? this.classStack[this.classStack.length - 1] : null;
        return result;
    }
    visitClassParameters(ctx) {
        ctx.classParameter().forEach(param => {
            const parameter = new dataStructure_1.Parameter(param.simpleIdentifier().text);
            parameter.type = param.type_().text;
            this.currentClass.parameters.push(parameter);
        });
        return this.visitReturn(ctx);
    }
    visitFunctionDeclaration(ctx) {
        const functionName = ctx.simpleIdentifier().text;
        const newFunction = new dataStructure_1.FunctionStructure(functionName);
        this.currentFunction ? this.currentFunction.body.functionDeclaration.push(newFunction) : this.functionDeclarationInfo.push(newFunction);
        if (this.currentClass) {
            this.currentClass.body.functionDeclaration.push(newFunction);
        }
        this.currentFunction = newFunction;
        this.functionStack.push(newFunction);
        const result = this.visitReturn(ctx);
        this.functionStack.pop();
        this.currentFunction = this.functionStack.length > 0 ? this.functionStack[this.functionStack.length - 1] : null;
        return result;
    }
    visitFunctionValueParameters(ctx) {
        var param = ctx.functionValueParameter();
        return this.visitReturn(ctx);
    }
    visitFunctionValueParameter(ctx) {
        const paramName = ctx.parameter().simpleIdentifier().text;
        const paramType = ctx.parameter().type_().text;
        const newParam = new dataStructure_1.Parameter(paramName);
        newParam.type = paramType;
        if (this.currentFunction) {
            this.currentFunction.parameters.push(newParam);
        }
        return this.visitReturn(ctx);
    }
    visitPropertyDeclaration(ctx) {
        const mutable = ctx.VAR();
        const isMutable = mutable ? true : false;
        this.currentProperty = new dataStructure_1.PropertyStructure('');
        this.currentProperty.isMutable = isMutable;
        return this.visitReturn(ctx);
    }
    visitVariableDeclaration(ctx) {
        var _a;
        const variableName = ctx.simpleIdentifier().text;
        const variableType = (_a = ctx.type_()) === null || _a === void 0 ? void 0 : _a.text;
        this.currentProperty.name = variableName;
        this.currentProperty.type = variableType;
        if (this.currentFunction)
            this.currentFunction.body.variableDeclaration.push(this.currentProperty);
        if (this.currentClass)
            this.currentClass.body.variableDeclaration.push(this.currentProperty);
        if (!this.currentFunction && !this.currentClass)
            this.variableDeclarationInfo.push(this.currentProperty);
        return this.visitReturn(ctx);
    }
    visitReturn(ctx) {
        return 1 + super.visitChildren(ctx);
    }
}
exports.default = CustomVisitor;
