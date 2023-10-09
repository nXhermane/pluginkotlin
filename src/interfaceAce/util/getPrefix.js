


export default function getPrefix(editor) {
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
	return prefix
}