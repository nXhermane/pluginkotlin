

import getPrefix from './prefix.js'
import compareWordArray from './compareWordArray.js'
export default async function insertTokens(instance, editor) {
	const prefix = getPrefix(editor)
	const tokenArray = []
	const session = editor.getSession();
	console.log(prefix)
	for (let i = 0; i < session.getLength(); i++) {

		const tokens = session.getTokens(i);
		for (let j = 0; j < tokens.length; j++) {
			const token = {
				name: tokens[j].value,
				type: tokens[j].type
			};
			if (token.name != prefix) {
				if (
					token.type === "identifier" ||
					token.type === "keyword.other.kotlin" ||
					token.type === "entity.name.variable.kotlin" ||
					token.type === "storage.type.buildin.kotlin" ||
					token.type === "variable.parameter.function.kotlin" ||
					token.type === "string" ||
					token.type === "constant.numeric.kotlin" ||
					token.type === "keyword"
				) {
					tokenArray.push(token);
				}
			}
		}
	}
	const uniqueArray = Array.from(new Set(tokenArray.map(JSON.stringify)), JSON.parse);
	if(!instance.firtInsertTokens){
		await instance.WordTree.insert(uniqueArray)
		instance.firtInsertTokens=true
	}
	const allTokensInWordTree = await instance.WordTree.getAllWords()
	const { added, removed } = compareWordArray(uniqueArray, allTokensInWordTree)
	await instance.WordTree.insert(added)
	await instance.WordTree.delete(removed)
}