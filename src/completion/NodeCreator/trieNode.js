
//import { levenshteinEditDistance } from 'levenshtein-edit-distance';
import stringSimilarity from 'string-similarity'
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
	check(word, element) {
		const result = search(word)
		for (let i = 0; i < result.length; i++) {
			const condition = (result[i] == element)
			if (condition) {
				this.delete(result[i].name)
			}
		}
	}
	insert(word, element) {

		const normalizedWord = word
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
		const normalizedPrefix = prefix
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
	getAllWords() {
		const words = [];
		this.collectWordsRecursive(this.root, '', words);
		return words;
	}

	collectWordsRecursive(node, currentWord, words) {
		if (!node) return;

		if (node.isEndOfWord) {
			words.push(currentWord);
		}

		for (let char in node.children) {
			this.collectWordsRecursive(
				node.children[char],
				currentWord + char,
				words
			);
		}
	}
	// searchWithCorrection(prefix, maxDistance = 3) {
// 		const normalizedPrefix = prefix.toLowerCase();
// 		const suggestions = [];
// 		this.searchWithCorrectionRecursive(this.root, '', normalizedPrefix, maxDistance, suggestions);
// 
// 		const elements = suggestions.map((suggestion) => {
// 			const node = this.getNodeWithWord(suggestion);
// 			return node ? node.element : null;
// 		});
// 
// 		return elements;
// 	}
// 
// 	searchWithCorrectionRecursive(node, currentWord, query, maxDistance, suggestions) {
// 		if (!node) return;
// 
// 		const distance = levenshteinEditDistance(currentWord, query);
// 
// 		if (node.isEndOfWord && distance <= maxDistance) {
// 			suggestions.push(currentWord);
// 		}
// 
//		for (let char in node.children) {
//			this.searchWithCorrectionRecursive(
//				node.children[char],
//				currentWord + char,
//				query,
//				maxDistance,
//				suggestions
//			);
//		}
//	}
searchWithCorrection(prefix, maxDistance) {
  const normalizedPrefix = prefix.toLowerCase();
  const suggestions = [];
  this.searchWithCorrectionRecursive(this.root, '', normalizedPrefix, maxDistance, suggestions);
  return suggestions;
}

searchWithCorrectionRecursive(node, currentWord, query, maxDistance, suggestions) {
  if (!node) return;

  if (node.isEndOfWord) {
    const similarity = stringSimilarity.compareTwoStrings(currentWord, query);
    if (similarity >= 0.1) { // Vous pouvez ajuster ce seuil en fonction de la précision souhaitée
      suggestions.push(node.element);
    }
  }

  for (let char in node.children) {
    this.searchWithCorrectionRecursive(
      node.children[char],
      currentWord + char,
      query,
      maxDistance,
      suggestions
    );
  }
}

	getNodeWithWord(word) {
		let node = this.root;
		for (let i = 0; i < word.length; i++) {
			const char = word[i];
			if (!node.children[char]) {
				return null;
			}
			node = node.children[char];
		}
		return node;
	}
}
// const trie = new Trie();
// 
// //Insérez des mots
// trie.insert('apple', 'Apple Element');
// trie.insert('a', 'a Element');
// trie.insert('banana', 'Banana Element');
// trie.insert('cherry', 'Cherry Element');
// trie.insert('mv', "oui");
// 
// //Effectuez une recherche avec correction
// const prefix = 'Ap'; // Un préfixe incorrect
// const maxDistance = 3; // Distance maximale autorisée
// 
// const suggestions = trie.searchWithCorrection(prefix);
// 
// console.log('Suggestions pour le préfixe', prefix, ':', suggestions);