import stringSimilarity from "string-similarity";
import jaro_winkler from "jaro-winkler";
class TrieNode {
   constructor() {
      this.children = new Map();
      this.isEndOfWord = false;
      this.element = {};
   }
}

export default class Trie {
   constructor() {
      this.root = new TrieNode();
   }
   add(word, element) {
      const normalizedWord = word.toLowerCase();
      let node = this.root;
      for (let i = 0; i < normalizedWord.length; i++) {
         let char = normalizedWord[i];
         if (!node.children.has(char)) {
            node.children.set(char, new TrieNode());
         }
         node = node.children.get(char);
      }
      node.isEndOfWord = true;
      if (!element.scope) element.scope = "global";
      const checkResult = this.__checkIfWordExist(word, element.scope);
      if (checkResult.cond && checkResult.scope === element.scope) {
         node.element[element.scope] = node.element[element.scope];
         node.element[element.scope][checkResult.index] = element;
      } else {
         node.element[element.scope] = node.element[element.scope] || [];
         node.element[element.scope].push(element);
      }
   }
   __checkIfWordExist(word, scopeToCheck) {
      const results = this.search(word.toLowerCase(), true);
      for (let i = 0; i < results.length; i++) {
         const elementObjet = results[i];
         for (const prop in elementObjet) {
            if (Object.hasOwnProperty.call(elementObjet, prop)) {
               const elementArray = elementObjet[prop];
               for (let j = 0; j < elementArray.length; j++) {
                  if (elementArray[j].name === word) {
                     if (scopeToCheck) {
                        if (prop === scopeToCheck) {
                           return { cond: true, index: j, scope: prop };
                        }
                     } else {
                        return { cond: true, index: j, scope: prop };
                     }
                  }
               }
            }
         }
      }
      return { cond: false };
   }
   search(prefix, forCheck = false) {
      const normalizedPrefix = prefix.toLowerCase();
      let node = this.root;
      let results = [];

      for (let i = 0; i < normalizedPrefix.length; i++) {
         let char = normalizedPrefix[i];
         if (!node.children.has(char)) {
            return results;
         }
         node = node.children.get(char);
      }
      this.collectElementsWithPrefix(node, results, forCheck);
      return results;
   }

   collectElementsWithPrefix(node, results, forCheck) {
      if (node.isEndOfWord) {
         const el = node.element;
         if (!forCheck) {
            for (const prop in el) {
               if (Object.hasOwnProperty.call(el, prop)) {
                  const elements = el[prop];
                  results.push(...elements);
               }
            }
            if (results.length > 100) return;
         } else {
            results.push(el);
         }
      }

      for (const [char, child] of node.children) {
         this.collectElementsWithPrefix(child, results, forCheck);
      }
   }

   delete(word, scope) {
      const normalizedWord = word.toLowerCase();
      if (!scope) scope = "global";
      return this.deleteRecursive(this.root, word, normalizedWord, 0, scope);
   }

   deleteRecursive(node, word, normalizedWord, index, scope) {
      if (index === word.length) {
         if (node.isEndOfWord) {
            let el = node.element;
            for (let prop in el) {
               if (Object.hasOwnProperty.call(el, prop) && prop === scope) {
                  const elements = node.element[prop];
                  for (let i = 0; i < elements.length; i++) {
                     if (elements[i].name === word) {
                        elements.splice(i, 1);
                        if (elements.length === 0) {
                           delete node.element[prop];
                        }
                        return true;
                     }
                  }
               }
            }
            if (Object.keys(el).length === 0) {
               node.isEndOfWord = false;
            }
         }
         return false;
      }

      const char = normalizedWord[index];
      if (!node.children.has(char)) {
         return false;
      }
      const shouldDeleteChild = this.deleteRecursive(
         node.children.get(char),
         word,
         normalizedWord,
         index + 1,
         scope
      );

      if (shouldDeleteChild) {
         return true;
      }
      return false;
   }
   getAllWords() {
      const words = [];
      this.collectWordsRecursive(this.root, "", words);
      return words;
   }
   collectWordsRecursive(node, currentWord, words) {
      if (!node) return;
      if (node.isEndOfWord) {
         const el = node.element;
         for (const prop in el) {
            if (Object.hasOwnProperty.call(el, prop)) {
               const elements = el[prop];
               words.push(
                  ...elements.map((element) => ({
                     word: element.name,
                     scope: element.scope,
                  }))
               );
            }
         }
      }
      for (const [char, child] of node.children) {
         this.collectWordsRecursive(child, currentWord + char, words);
      }
   }
   searchWithCorrection(prefix, maxDistance = 0.2) {
      const normalizedPrefix = prefix.toLowerCase();
      const suggestions = [];
      this.searchWithCorrectionRecursive(
         this.root,
         "",
         normalizedPrefix,
         maxDistance,
         suggestions,
         prefix
      );
      return suggestions;
   }

   searchWithCorrectionRecursive(
      node,
      currentWord,
      query,
      maxDistance,
      suggestions,
      prefix
   ) {
      if (!node) return;
      //if (suggestions.length >= 100) return;

      if (node.isEndOfWord) {
         const similarity =
            prefix.length === 1
               ? jaro_winkler(currentWord, query)
               : stringSimilarity.compareTwoStrings(currentWord, query);

         if (similarity >= 0.2) {
            const el = node.element;
            for (const prop in el) {
               if (Object.hasOwnProperty.call(el, prop)) {
                  const elements = el[prop];
                  suggestions.push(...elements);
               }
            }
         }
      }

      for (const [char, child] of node.children) {
         this.searchWithCorrectionRecursive(
            child,
            currentWord + char,
            query,
            maxDistance,
            suggestions,
            prefix
         );
      }
   }
}

/*
const trie = new Trie();
// //
//Insérez des mots
trie.add("apple", { name: "apple" });
trie.add("Apple", { name: "Apple" });
trie.add("Ap", { name: "Ap" });
trie.add("banan", { name: "banan" });
trie.add("cherry", { name: "cherry" });
trie.add("mv", { name: "nv" });
trie.add("Apple", { name: "Apple", scope: "main" });

//Effectuez une recherche avec correction
const prefix = "app"; // Un préfixe incorrect
const maxDistance = 0.2; // Distance maximale autorisée

const suggestions = trie.searchWithCorrection(prefix);

// //
console.log("Suggestions pour le préfixe", prefix, ":", suggestions);
//
function generateRandomWord(length) {
   let result = "abc";
   const characters = "abcdefghijklmnopqrstuvwxyz";
   const charactersLength = characters.length;
   for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// Générez un grand nombre de données aléatoires et insérez-les dans l'arbre
const numberOfWords = 10000; // Vous pouvez augmenter cette valeur
const addStart = Date.now();
for (let i = 0; i < numberOfWords; i++) {
   const word = generateRandomWord(5); // Génère des mots de longueur 5
   const element = { name: word, scope: "global" }; // Élément factice
   trie.add(word, element);
}
const addEnd = Date.now();

// Effectuez des opérations de recherche, suppression, etc., pour tester les performances

// Exemple de recherche
const start = Date.now();
const searchResults = trie.searchWithCorrection("a");
const end = Date.now();

console.log(searchResults, searchResults.length);
console.log("=====>", end - start, "ms");
console.log("=====>", addEnd - addStart, "ms");
// Exemple de suppression
const wordToDelete = "xyz";
trie.delete(wordToDelete);

// Vous pouvez mesurer le temps d'exécution pour évaluer les performances
*/
