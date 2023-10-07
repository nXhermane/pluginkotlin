// import GenerateTree from './parser/manager/astGenerator.js'
// import KotlinLexer from './parser/antlr4_res//KotlinLexer.js';
// import KotlinParser from './parser/antlr4_res/KotlinParser.js';
// import KotlinParserVisitor from './parser/antlr4_res/KotlinParserVisitor.js';
// import CustomErrorListener from './parser/manager/customClass/CustomErrorListener.js'
// import CustomVisitor from './parser/manager/customClass/CustomVisitor.js'
import Scope from './parser/model/scopeNode.js'
import Trie from './NodeCreator/trieNode.js'

export default class Completion {
	constructor() {
		this.trie = new Trie();
	}

	// async analyse(sourceCode) {
// 		const debut = Date.now();
// 		this.newTree = new GenerateTree(sourceCode)
// 			.applyLexer(KotlinLexer)
// 			.applyParser(KotlinParser)
// 			.applyCustomError(CustomErrorListener)
// 			.generate()
// 			.applyVisitor(CustomVisitor)
// 			.build();
// 		const fin = Date.now();
// 		console.log(fin - debut);
// 		return this;
// 	}

	async extract(tree) {
		const debut = Date.now();
		this.Scope = new Scope();
		await this.Scope.extractClassArray(tree.visitor.classDeclarationInfo);
		await this.Scope.extractFunctionArray(tree.visitor.functionDeclarationInfo);
		await this.Scope.extractVariableArray(tree.visitor.variableDeclarationInfo);
		await this.Scope.extractImportArray(tree.visitor.importInfo);
		this.data = this.Scope.data;
		console.log(this.data);
		await this.insert(this.data);
		const fin = Date.now();
		console.log(`extraction  ${fin - debut}`);
		return this; // Retourne l'instance actuelle pour l'enchaînement
	}

	async insert(data) {
		const debut = Date.now();
		for (let i = 0; i < data.length; i++) {
			this.trie.insert(data[i].name, data[i]);
		}
		const fin = Date.now();
		console.log(`insertion  ${fin - debut}`);
		return this; // Retourne l'instance actuelle pour l'enchaînement
	}

	async search(prefix) {
		const result = await this.trie.search(prefix);
		return result;
	}
}

// (async () => {
// 	const sourceCode = `
//     val bbnbbn=8
//     var beto="value"
//     fun belo(){
//         println('n')
//     }`;
// 
// 	// Utilisation de l'enchaînement fluide
// 	const completion = new Completion()
// 	await completion.analyse(sourceCode)
// 	await completion.extract()
// 	console.log(await completion.search('b'))
// })();