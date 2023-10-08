
import Scope from './parser/model/scopeNode.js';
import Trie from './NodeCreator/trieNode.js';

export default class Completion {
	constructor() {
		this.trie = new Trie();
	}
	data = null
	async extract(tree) {
		const debut = Date.now();
		this.Scope = new Scope();
		await this.Scope.extractClassArray(tree.visitor.classDeclarationInfo);
		await this.Scope.extractFunctionArray(tree.visitor.functionDeclarationInfo);
		await this.Scope.extractVariableArray(tree.visitor.variableDeclarationInfo);
		await this.Scope.extractImportArray(tree.visitor.importInfo);
		this.data = this.Scope.data;
		const fin = Date.now();
		console.log(`extraction  ${fin - debut}`);
		return this;
	}

	async insert(data) {
		const debut = Date.now();
		for (let i = 0; i <= data.length; i++) {
			this.trie.insert(data[i].name, data[i]);
		}
		const fin = Date.now();
		console.log(`insertion  ${fin - debut}`);
		return this;
	}

	async search(prefix) {
		const result = await this.trie.search(prefix);
		return result;
	}
}

export class CompletionTrie {
	constructor() {
		this.trie = new Trie()
	}
	insert(data) {
		const debut = Date.now();
		for (let i = 0; i < data.length; i++) {
			this.trie.insert(data[i].name, data[i]);
		}
		const fin = Date.now();
		console.log(`insertion  ${fin - debut}`);
	}
	async search(prefix) {
		const result = await this.trie.search(prefix);
		return result;
	}
}