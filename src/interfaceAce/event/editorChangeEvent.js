import getPrefix from './../util/getPrefix.js'

export default function editorChangeEvent(instance, editor) {
	editor.addEventListener("changeSelection", async () => {
		if (instance.condition) {
			const cursorElement = document.querySelector('.ace_cursor')
			console.log('changeSelection')
			const cursorPosition = editor.getCursorPosition();
			const cursorLine = cursorPosition.row;
			const cursorColumn = cursorPosition.column;
			const prefix = getPrefix(editor)
			if (prefix == '') {
				instance.popup.hide()
				instance.popup.positionBlocked = true
				const cursorElement = document.querySelector('.ace_cursor')
				const rect = cursorElement.getBoundingClientRect()
				instance.popup.navigatPopup(rect)
			}
			if (prefix != '') {
				if(instance.getPrefixIsPossible){
					instance.popup.hide()
					return
				}
				const cursorElement = document.querySelector('.ace_cursor')
				const rect = cursorElement.getBoundingClientRect()
				instance.popup.navigatPopup(rect)
				instance.popup.positionBlocked = false
				const session = editor.getSession();
				const searchArray = await instance.complet.search(prefix)
				console.log(searchArray)
				for (let i = 0; i < session.getLength(); i++) {
					const tokens = session.getTokens(i)
					for (let j = 0; j < tokens.length; j++) {
						for (let s = 0; s < searchArray.length; s++) {
							if (searchArray[s].name === tokens[j].value) {

								const line = cursorLine - i
								const column = cursorColumn - j
								if (!searchArray[s].hasOwnProperty('line')) {
									searchArray[s].line = []
									searchArray[s].line.push(line)
								} else {
									searchArray[s].line.push(line)
								}

							}
						}
					}
				}

				instance.popup.addDataToPopup(searchArray)
			}
			
		}
	})
}