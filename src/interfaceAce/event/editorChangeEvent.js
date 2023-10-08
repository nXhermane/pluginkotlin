

export default function editorChangeEvent(instance,editor){
	editor.addEventListener("changeSelection", async () => {
			if (instance.condition) {
				const cursorPosition = editor.getCursorPosition();
				const cursorLine = cursorPosition.row;
				const cursorColumn = cursorPosition.column;
				const currentLine = editor.session.getLine(cursorLine);

				let lastNonAlphabeticCharIndex = -1;
				for (let i = cursorColumn - 1; i >= 0; i--) {
					if (!/[a-zA-Z0-9_]/.test(currentLine[i])) {
						lastNonAlphabeticCharIndex = i;
						break;
					}
				}
				const prefix = currentLine.substring(lastNonAlphabeticCharIndex + 1, cursorColumn);
				if (prefix != '') {
					const session = editor.getSession();
					const searchArray = await instance.complet.search(prefix)
					for (let i = 0; i < session.getLength(); i++) {
						const tokens = session.getTokens(i)
						for (let j = 0; j < tokens.length; j++) {
							for (let s = 0; s < searchArray.length; s++) {
								if (searchArray[s].name === tokens[j].value) {
									console.log(searchArray[s], tokens[j])
									const line = cursorLine - i
									const column = cursorColumn - j
									if (!searchArray[s].hasOwnProperty('line')) {
										searchArray[s].line = []
										searchArray[s].line.push(line)
									} else {
										searchArray[s].line.push(line)
									}
									console.log(searchArray[s])
								}
							}
						}
					}
				}
			}
		})
}