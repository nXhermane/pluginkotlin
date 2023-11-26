const TokenIterator = ace.require("ace/token_iterator").TokenIterator;

export default class Scope {
   constructor(editor) {
      this.editor = editor;
      this.session = editor.session;
   }
   initScopeManager() {
      console.log("yest");
   }
   findCurrentScope() {
      const currentCursorPosition = this.editor.getCursorPosition();
      const Iterator = new TokenIterator(
         this.session,
         currentCursorPosition.row,
         currentCursorPosition.column
      );
      let braceCount = 1;
      let token = Iterator.getCurrentToken();
      if (!token) token = Iterator.stepForward();
      if (!token) return;
      let value = token.value;
      while (true) {
         if (token.type === "paren.lparen") {
            braceCount--;
            if (braceCount === 0) {
               return {
                  row: Iterator.getCurrentTokenRow(),
                  column: Iterator.getCurrentTokenColumn(),
                  token: Iterator.getCurrentToken(),
               };
            }
         } else if (token.type === "paren.rparen") {
            braceCount++;
         }
         do {
            token = Iterator.stepBackward();
         } while (
            token &&
            !(token.type === "paren.lparen" || token.type === "paren.rparen")
         );
         if (token == null) break;
      }
      return null;
   }
   findDomElAtPosition(pos) {
      if (!pos) return;
      let container = this.editor.container;
      let session = this.editor.session;
      const lineArray = container.querySelector(
         "div.ace_text-layer.ace_layer"
      ).children;
      const lineNumberArray = container.querySelector(
         "div.ace_layer.ace_gutter-layer"
      ).children;
      var lineDomEl = null;
      for (let i = 0; i < lineNumberArray.length; i++) {
         if (pos.row + 1 == parseInt(lineNumberArray[i].textContent)) {
            lineDomEl = lineArray[i];
         }
      }
      if (lineDomEl == null) return;
      const lineDomElChild = lineDomEl.querySelector("div.ace_line").children;
      var tokenRowTokenList = session.getTokens(pos.row);
      let Iterator = new TokenIterator(session, pos.row, 0);
      var currentToken = Iterator.getCurrentToken();
      var tokenIndex = null;
      var countIndex = 0;
      while (true && Iterator.getCurrentTokenRow() == pos.row) {
         var currentTokenColumn = Iterator.getCurrentTokenColumn();
         if (
            pos.column === currentTokenColumn ||
            pos.column - 1 === currentTokenColumn
         ) {
            tokenIndex = countIndex;
         }
         currentToken = Iterator.stepForward();
         if (currentToken == null) {
            break;
         }
         if (currentToken.type != "text") countIndex++;
      }
      if (tokenIndex == null) return;
      const lineChildAssociateTokenArray = [];
      for (let i = 0; i < lineDomElChild.length; i++) {
         if (!lineDomElChild[i].classList.contains("ace_indent-guide")) {
            lineChildAssociateTokenArray.push(lineDomElChild[i]);
         }
      }
      var el =
         lineChildAssociateTokenArray[
            tokenIndex != 0 ? tokenIndex - 1 : tokenIndex
         ];
      return el;
   }
   getScopeRange(scopeStart) {
      if (!scopeStart) return;
      return this.editor.session.getBracketRange(scopeStart);
   }
   init() {
      var scopeStart = this.findCurrentScope();
      var scopeRange = this.getScopeRange(scopeStart);
      if (!scopeRange) return;
      var openScopeElPos = scopeRange.start;
      var closeScopeElPos = scopeRange.end;
      var openScopeElDom = this.findDomElAtPosition(openScopeElPos);
      var closeScopeElDom = this.findDomElAtPosition(closeScopeElPos);
      if (openScopeElDom) openScopeElDom.style.background = "red";
      if (closeScopeElDom) closeScopeElDom.style.background = "red";
   }
}
