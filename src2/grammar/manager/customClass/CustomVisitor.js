import antlr4 from 'antlr4'
import KotlinParserVisitor from './../../antlr4_res/KotlinParserVisitor.js';
import {ClassStructure,Parameter} from './dataStructure.js'


export default class CustomVisitor extends KotlinParserVisitor {
	constructor() {
		super();
		this.currentFunction = null
		this.importIdentifierInfo = []
		this.classDeclarationInfo=[]
		this.currentClass=null
		this.cuurentFunction=null
		this.classStack=[]
	}


	visitKotlinFile(ctx) {
		return this.visitChildren(ctx);
	}
	
	visitImportList(ctx) {
		const importHeader = ctx.importHeader()
		importHeader.forEach(e=>{
			const importkeyword= e.identifier().getText().split('.')
			this.importIdentifierInfo=this.importIdentifierInfo.concat(importkeyword)
		})
		return this.visitChildren(ctx);
	}
	
	visitClassDeclaration(ctx) {
    const classDeclaration = ctx.simpleIdentifier().getText();
    const newClass = new ClassStructure(classDeclaration);
    
    if (this.currentClass) {
        // Si une classe courante existe, il s'agit d'une classe imbriquée.
        // Ajoutez-la à la classe parente.
        this.currentClass.innerClasses.push(newClass);
    } else {
        // Sinon, c'est la classe principale.
        // Ajoutez-la à votre liste de classes principales.
        this.classDeclarationInfo.push(newClass);
    }
    
    // Mettez à jour la classe courante et la pile.
    this.currentClass = newClass;
    this.classStack.push(newClass);
    
    const result = this.visitChildren(ctx);
    
    // Une fois que vous avez visité la classe et ses membres,
    // retirez-la de la pile.
    this.classStack.pop();
    this.currentClass = this.classStack.length > 0 ? this.classStack[this.classStack.length - 1] : null;
    
    return result;
}

	visitClassParameters(ctx){
		ctx.classParameter().forEach(param=>{
			const parameter=new Parameter(param.simpleIdentifier().getText())
			parameter.type=param.type_().getText()
			this.currentClass.parameters.push(parameter)
		})
		console.log(this.currentClass)
		return this.visitChildren(ctx)
	}
	
	visitFunctionDeclaration(ctx) {
		const functionName = ctx.simpleIdentifier().getText();
		this.currentClass=this.classStack.length >0 ? this.classStack[this.classStack.length -1] : null
		this.currentClass?.methods.push(functionName)
		console.log(this.classDeclarationInfo)
		console.log(`Entering function declaration: ${functionName}`);
		return this.visitChildren(ctx);
	}

	visitFunctionValueParameters(ctx) {
		const parameters = ctx.functionValueParameter();
		parameters.forEach(paramCtx => {
			const paramName = paramCtx.parameter().simpleIdentifier().getText();
			const paramType = paramCtx.parameter().type_().getText();
			console.log(`Parameter: ${paramName} - Type: ${paramType}`);
		});
		return this.visitChildren(ctx);
	}
	
	visitSimpleIdentifer(ctx) {
		console.log("identifier")
		return this.visitChildren(ctx)
	}
	
	visitVariableDeclaration(ctx) {
		const name = ctx.simpleIdentifier().getText();
		console.log(`Variable Declaration: ${name}`);
		return this.visitChildren(ctx);
	}
}



// implements KotlinParserVisitor<Result> {
//     currentFunction: string | null;
//     importIdentifierInfo: string[];
//     classDeclarationInfo: ClassStructure[];
//     currentClass: ClassStructure | null;
//     cuurentFunction: string | null;
//     classStack: ClassStructure[];
// 
//     constructor() {
//         this.currentFunction = null;
//         this.importIdentifierInfo = [];
//         this.classDeclarationInfo = [];
//         this.currentClass = null;
//         this.cuurentFunction = null;
//         this.classStack = [];
//     }
// 
//     visitKotlinFile(ctx: any) {
// 	console.log('kotllin dile')
//         return this.visitChildren(ctx);
//     }
// 
//     visitImportList(ctx: any) {
//         const importHeader = ctx.importHeader();
//         importHeader.forEach((e: any) => {
//             const importkeyword = e.identifier().getText().split('.');
//             this.importIdentifierInfo = this.importIdentifierInfo.concat(importkeyword);
//         });
//         return this.visitChildren(ctx);
//     }
// 
//     visitClassDeclaration(ctx: any) {
//         const classDeclaration = ctx.simpleIdentifier().getText();
//         const newClass = new ClassStructure(classDeclaration);
//         if (this.currentClass) {
//             this.currentClass.innerClasses.push(newClass);
//         } else {
//             this.classDeclarationInfo.push(newClass);
//         }
//         this.currentClass = newClass;
//         this.classStack.push(newClass);
// 	console.log(this.classDeclarationInfo)
//         const result = this.visitChildren(ctx);
//         this.classStack.pop();
//         this.currentClass = this.classStack.length > 0 ? this.classStack[this.classStack.length - 1] : null;
//         return result;
//     }
// 
//     visitClassParameters(ctx: any) {
//         ctx.classParameter().forEach((param: any) => {
//             const parameter = new Parameter(param.simpleIdentifier().getText());
//             parameter.type = param.type_().getText();
//             this.currentClass?.parameters.push(parameter);
//         });
//         console.log(this.currentClass);
//         return this.visitChildren(ctx);
//     }
// 
//     visitFunctionDeclaration(ctx: any) {
//         const functionName = ctx.simpleIdentifier().getText();
//         this.currentClass = this.classStack.length > 0 ? this.classStack[this.classStack.length - 1] : null;
//         this.currentClass?.methods.push(functionName);
//         console.log(this.classDeclarationInfo);
//         console.log(`Entering function declaration: ${functionName}`);
//         return this.visitChildren(ctx);
//     }
// 
//     visitFunctionValueParameters(ctx: any) {
//         const parameters = ctx.functionValueParameter();
//         parameters.forEach((paramCtx: any) => {
//             const paramName = paramCtx.parameter().simpleIdentifier().getText();
//             const paramType = paramCtx.parameter().type_().getText();
//             console.log(`Parameter: ${paramName} - Type: ${paramType}`);
//         });
//         return this.visitChildren(ctx);
//     }
// 
//     visitSimpleIdentifier(ctx: any) {
//         console.log("identifier");
//         return this.visitChildren(ctx);
//     }
// 
//     visitVariableDeclaration(ctx: any) {
//         const name = ctx.simpleIdentifier().getText();
//         console.log(`Variable Declaration: ${name}`);
//         return this.visitChildren(ctx);
//     }