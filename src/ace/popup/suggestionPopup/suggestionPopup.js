export default class suggestionPopup {
   maxlines = 8;
   lineHeigth = 15;
   isOpen = false;
   constructor(baseUrl, editor) {
      this.baseUrl = baseUrl;
      this.editor = editor;
      this.$style = tag("link", {
         rel: "stylesheet",
         href: this.baseUrl + "html/style.css",
      });
      document.head.append(this.$style);
      this.$Popup = tag("section", { id: "kotlin_popup_completion" });
      this.$PopupOptionContainer = tag("div", {
         className: "optionContainer",
      });
      this.$Popup.append(this.$PopupOptionContainer);
      app.get("main").append(this.$Popup);
   }
   addOption(
      { tokenText, suggestionType, iconPath },
      element,
      isActive = false
   ) {
      this.$Option = tag("div", { className: "Option" });
      this.$token = tag("div", { className: "token" });
      this.$tokenIcone = tag("div", { className: "tokenIcone" });
      this.$tokenIcone.innerHTML = `<svg><image href="${this.baseUrl}${iconPath}" /></svg>`;
      this.$tokenText = tag("div", { className: "tokenText" });
      this.$p = tag("p", { textContent: tokenText });
      this.$tokenText.append(this.$p);
      this.$tokenInfo = tag("div", { className: "tokenInfo" });
      this.$span = tag("span", { textContent: suggestionType });
      this.$tokenInfo.append(this.$span);
      this.$token.append(this.$tokenIcone, this.$tokenText);
      this.$Option.append(this.$token, this.$tokenInfo);
      this.$Option.dataset.info = JSON.stringify(element);
      isActive ? this.$Option.classList.add("active") : null;
      this.$PopupOptionContainer.append(this.$Option);
   }
   move() {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      const el = this.$Popup;
      const elWidth = el.offsetWidth;
      const elHeight = el.offsetHeight;
      // const cursorPosition = this.editor.getCursorPosition();
      // const cursorLine = cursorPosition.row;
      const cursorElement = document.querySelector(".ace_cursor");
      const rect = cursorElement.getBoundingClientRect();
      const {top,left,bottom}=rect;
      const allowTopDown=
      console.log(left,top,bottom,elWidth,elHeight);
   }
   show() {
      this.move();
      this.$Popup.style.display = "flex";
      this.isOpen = true;
   }
   hide() {
      this.$Popup.style.display = "none";
      this.isOpen = false;
   }
}
