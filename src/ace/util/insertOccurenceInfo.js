

export default async function insertOccurenceInfo(editor, searchArray) {
	const cursorElement = document.querySelector('.ace_cursor')
	const cursorPosition = editor.getCursorPosition();
	const cursorLine = cursorPosition.row;
	const cursorColumn = cursorPosition.column;
	const session = editor.getSession();
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
}