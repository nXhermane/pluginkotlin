import coloration from "./coloration.js";

export default function scopeManager(editor) {
   const cursorPosition = editor.getCursorPosition();
   const cursorLine = cursorPosition.row;
   const cursorColumn = cursorPosition.column;
   const session = editor.session;

   let braceCount = 1;
   let bracketCount = 1;
   let parenthesisCount = 1;

   for (let i = cursorLine; i >= 0; i--) {
      const tokens = session.getTokens(i);

      for (let j = tokens.length - 1; j >= 0; j--) {
         const token = tokens[j];

         if (token != undefined) {
            const tokenValue = token.value;
            const tokenColumn = token.start;

            if (i === cursorLine && tokenColumn >= cursorColumn) {
							console.log(token,tokenColumn,cursorColumn)
               continue;
            }

            switch (tokenValue) {
               case "}":
                  braceCount++;
                  break;
               case "{":
                  braceCount--;
                  if (braceCount === 0) {
                     console.log("Portée trouvée à la ligne ", i);
                     coloration(editor, i, "{");
                     return;
                  }
                  break;
               case "]":
                  braceCount++;
                  break;
               case "[":
                  braceCount--;
                  if (braceCount === 0) {
                     console.log("Portée de crochets trouvée à la ligne ", i);
                     coloration(editor, i, "[");
                     return;
                  }
                  break;
               case ")":
                  braceCount++;
                  break;
               case "(":
                  braceCount--;
                  if (braceCount === 0) {
                     console.log(
                        "Portée de parenthèses trouvée à la ligne ",
                        i
                     );
                     coloration(editor, i, "(");
                     return;
                  }
                  break;
            }
         }
      }
   }
}
