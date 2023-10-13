var ID_REGEX = /[a-zA-Z_0-9$-\u00A2-\uFFFF]/;

/**
 * Retrieve the preceding identifier in the given text at a specified position.
 * @param text - The input text.
 * @param pos - The position to start from.
 * @param regex - The regular expression for identifying characters.
 * @return {string} - The preceding identifier.
 */
function retrievePrecedingIdentifier(text, pos, regex) {
   regex = regex || ID_REGEX;
   var identifierBuffer = [];
   for (var i = pos - 1; i >= 0; i--) {
      if (regex.test(text[i])) identifierBuffer.push(text[i]);
      else break;
   }
   return identifierBuffer.reverse().join("") + text[pos];
}

/**
 * Get the prefix for auto-completion.
 * @param editor - The editor object.
 * @return {string} - The auto-completion prefix.
 */
export function getCompletionPrefix(editor) {
   var pos = editor.getCursorPosition();
   var line = editor.session.getLine(pos.row);
   var prefix;
   editor.completers.forEach(function (completer) {
      if (completer.identifierRegexps) {
         completer.identifierRegexps.forEach(function (identifierRegex) {
            if (!prefix && identifierRegex)
               prefix = retrievePrecedingIdentifier(
                  line,
                  pos.column,
                  identifierRegex
               );
         });
      }
   });
   return (
      prefix ||
      retrievePrecedingIdentifier(line, pos.column - 1, /[a-zA-Z0-9_]/)
   );
}
/**
 * Get the prefix for auto-completion.
 * @param editor - The editor object.
 * @return {string} - The auto-completion prefix.
 * This method is more exact than the getCompletion function.
 */
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
   const prefix = currentLine.substring(
      lastNonAlphabeticCharIndex + 1,
      cursorColumn
   );
   return prefix;
}
