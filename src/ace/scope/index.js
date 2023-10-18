import coloration from "./coloration.js";

export default function scopeManager(editor) {
   const cursorPosition = editor.getCursorPosition();
   const cursorLine = cursorPosition.row;
   const cursorColumn = cursorPosition.column;
   const session = editor.session;
   let braceCount = 1;

   for (let i = cursorLine; i >= 0; i--) {
      const tokens = session.getTokens(i);

      for (let j = tokens.length - 1; j >= 0; j--) {
         const token = tokens[j];

         if (token == undefined) {
            continue;
         }

         const tokenType = token.type;
         const tokenValue = token.value;
         const tokenColumn = token.start;

         if (i === cursorLine) {
            let startColumnOfCurrentToken = 0;

            for (let z = j - 1; z >= 0; z--) {
               startColumnOfCurrentToken += tokens[z].value.length;
            }

            if (startColumnOfCurrentToken >= cursorColumn) {
               continue;
            }
         }

         if (tokenType === "paren.lparen") {
            braceCount--;

            if (braceCount === 0) {
               let associateType = "";
               switch (tokenValue) {
                  case "(":
                     associateType = ")";
                     break;
                  case "[":
                     associateType = "]";
                     break;
                  case "{":
                     associateType = "}";
                     break;
               }

               let sameLineVerifyCount = 1;
               let sameLine = false;
               let tokenAssociateIndex = 0;
               let tokenValueIndex = j;

               for (let z = j + 1; z < tokens.length; z++) {
                  if (tokens[z].value === tokenValue) {
                     sameLineVerifyCount++;
                  } else if (tokens[z].value === associateType) {
                     sameLineVerifyCount--;

                     if (sameLineVerifyCount === 0) {
                        sameLine = true;
                        tokenAssociateIndex = z;
                        break;
                     }
                  }
               }
               let tableOfBlock = [];
               for (let z = 0; z < tokens.length; z++) {
                  if (tokens[z].value === tokenValue) {
                     if (z !== tokenValueIndex) {
                        tableOfBlock.push({ state: false, type: 1 });
                     } else {
                        tableOfBlock.push({ state: true, type: 1 });
                     }
                  } else if (tokens[z].value === associateType) {
                     if (z !== tokenAssociateIndex) {
                        tableOfBlock.push({ state: false, type: 0 });
                     } else {
                        tableOfBlock.push({ state: true, type: 0 });
                     }
                  }
               }

               coloration(
                  editor,
                  i,
                  tokenValue,
                  tokenValueIndex,
                  associateType,
                  tokenAssociateIndex,
                  sameLine,
                  tableOfBlock
               );
               return;
            }
         } else if (tokenType === "paren.rparen") {
            braceCount++;
         }
      }
   }
}
