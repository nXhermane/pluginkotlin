// Structure de base pour un nœud dans l'arbre de préfixes

class TrieNode {
    constructor() {
        this.children = {};
        this.infos = []; // Utiliser un tableau pour stocker plusieurs informations
    }
}

// Classe pour stocker les informations supplémentaires
class KeywordInfo {
    constructor(description, link) {
        this.description = description;
        this.link = link;
    }
}

// Fonction pour ajouter un mot avec des informations supplémentaires
function insertWithMultipleInfo(root, word, description, link) {
    let node = root;
    for (let char of word) {
        if (!node.children[char]) {
            node.children[char] = new TrieNode();
        }
        node = node.children[char];
    }
    node.infos.push(new KeywordInfo(description, link));
}

// Fonction pour chercher des suggestions avec des informations multiples
function findSuggestionsWithMultipleInfo(root, prefix) {
    let node = root;
    for (let char of prefix) {
        if (!node.children[char]) {
            return []; // Aucune suggestion trouvée pour ce préfixe
        }
        node = node.children[char];
    }

    function findAllWordsWithMultipleInfo(node, word = '', suggestions = []) {
        for (let info of node.infos) {
            suggestions.push({ word, info });
        }
        for (let char in node.children) {
            findAllWordsWithMultipleInfo(node.children[char], word + char, suggestions);
        }
        return suggestions;
    }

    return findAllWordsWithMultipleInfo(node, prefix, []);
}

// Exemple d'utilisation
const root = new TrieNode();

// Ajouter des mots-clés Kotlin avec des informations multiples
insertWithMultipleInfo(root, "val", "Déclaration de variable immuable", "lien1");
insertWithMultipleInfo(root, "val", "Description alternative pour val", "lien2");
insertWithMultipleInfo(root, "var", "Déclaration de variable mutable", "lien3");
insertWithMultipleInfo(root, "fun", "Déclaration de fonction", "lien4");
insertWithMultipleInfo(root, "class", "Déclaration de classe", "lien5");
insertWithMultipleInfo(root, "if", "Instruction conditionnelle", "lien6");
insertWithMultipleInfo(root, "else", "Instruction else", "lien7");

// Rechercher des suggestions pour le préfixe "va"
const suggestions = findSuggestionsWithMultipleInfo(root, "va");
console.log(suggestions);