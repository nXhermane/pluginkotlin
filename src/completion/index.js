
import Trie from './NodeCreator/trieNode.js';

export default class WordTreeManager {
	constructor() {
		this.trie = new Trie()
	}
	async insert(data) {
		for (let i = 0; i < data.length; i++) {
			this.trie.insert(data[i].name, data[i]);
		}
	}
	async search(prefix) {
		const result = await this.trie.search(prefix);
		return result;
	}
	async getAllWords() {
		const result = await this.trie.getAllWords()
		return result
	}
	async delete(data) {
		for (let i = 0; i < data.length; i++) {
			this.trie.delete(data[i])
		}
	}
}