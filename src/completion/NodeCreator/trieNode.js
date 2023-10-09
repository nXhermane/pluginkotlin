import Diacritics  from 'diacritics';
class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
    this.element = null;
  }
}

export default class Trie {
  constructor() {
    this.root = new TrieNode();
  }
	check(word,element){
		const result = search(word)
		for(let i=0;i<result.length;i++){
			const condition=(result[i]==element)
			if(condition){
				this.delete(result[i].name)
			}
		}
	}
  insert(word, element) {
	
    const normalizedWord = word//Diacritics.remove(word).toLowerCase(); // Normalisation
    //this.check(word,element)
    let node = this.root;
    for (let i = 0; i < normalizedWord.length; i++) {
      let char = normalizedWord[i];
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
    node.element = element;
  }

  search(prefix) {
    const normalizedPrefix = prefix//Diacritics.remove(prefix).toLowerCase(); // Normalisation
    let node = this.root;
    let results = [];

    for (let i = 0; i < normalizedPrefix.length; i++) {
      let char = normalizedPrefix[i];
      if (!node.children[char]) {
        return results;
      }
      node = node.children[char];
    }
    this.collectElementsWithPrefix(node, results);
    return results;
  }

  collectElementsWithPrefix(node, results) {
    if (node.isEndOfWord) {
      results.push(node.element);
    }

    for (let char in node.children) {
      this.collectElementsWithPrefix(node.children[char], results);
    }
  }

  delete(word) {
    this.deleteRecursive(this.root, word, 0);
  }

  deleteRecursive(node, word, index) {
    if (index === word.length) {
      if (node.isEndOfWord) {
        node.isEndOfWord = false;
        node.element = null;
      }

      if (Object.keys(node.children).length === 0) {
        return true;
      }
      return false;
    }

    const char = word[index];
    if (!node.children[char]) {
      return false;
    }

    const shouldDeleteChild = this.deleteRecursive(node.children[char], word, index + 1);

    if (shouldDeleteChild) {
      delete node.children[char];
      return Object.keys(node.children).length === 0;
    }

    return false;
  }
}

