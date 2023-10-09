import getPrefix from './../util/getPrefix.js'


export default function editorInputEventHandlers(instance, editor) {
	editor.addEventListener('input', async () => {
		if (instance.condition) {
			const cursorElement = document.querySelector('.ace_cursor')
			const rect = cursorElement.getBoundingClientRect()
			instance.popup.navigatPopup(rect)
			const prefix = getPrefix(editor)
			const tokenArray = []
			const session = editor.getSession();
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

			async function insertion(array, complet) {
				for (let i = 0; i < array.length; i++) {
					const resultArray = await complet.search(array[i].name)
					for (let j = 0; j < resultArray.length; j++) {
						if (resultArray[j].hasOwnProperty('scope')) {
							array.splice(i, 1)
						}
					}
				}
				return array
			}
			const complet = instance.complet
			instance.complet.insert(await insertion(uniqueArray, complet))


			if (instance.counter == 10) {
				// Écoutez les messages du worker
				instance.counter = 0
				console.log('recherche lancer')
				instance.worker.postMessage(editor.getValue());
			}

			instance.counter++
		}
	})
}