


var ID_REGEX = /[a-zA-Z_0-9\$\-\u00A2-\uFFFF]/;

function retrievePrecedingIdentifier(text, pos, regex) {
	regex = regex || ID_REGEX;
	var buf = [];
	for (var i = pos - 1; i >= 0; i--) {
		if (regex.test(text[i]))
			buf.push(text[i]);
		else
			break;
	}
	return buf.reverse().join("") + text[pos];
}



export default function getCompletionPrefix(editor) {
	var pos = editor.getCursorPosition();
	var line = editor.session.getLine(pos.row);
	var prefix;
	editor.completers.forEach(function (completer) {
		if (completer.identifierRegexps) {
			completer.identifierRegexps.forEach(function (identifierRegex) {
				if (!prefix && identifierRegex)
					prefix = retrievePrecedingIdentifier(line, pos.column, identifierRegex);
			});
		}
	});
	return prefix || retrievePrecedingIdentifier(line, pos.column - 1);
}
