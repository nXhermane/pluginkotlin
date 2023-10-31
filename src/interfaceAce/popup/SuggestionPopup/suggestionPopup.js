import relevance from "./../../util/relevance.js";
export default class suggestionPopup {
   $maxLines = 8;
   lineHeight = 15;
   $borderSize = 1;
   $maxPixelHeight = null;
   isTopdown = null;
   positionBlocked = true;
   cursorPosition = null;
   constructor(baseUrl, editor) {
      this.baseUrl = baseUrl;
      this.editor = editor;
      this.$style = tag("link", {
         rel: "stylesheet",
         href: this.baseUrl + "css/style.css",
      });
      document.head.append(this.$style);
      this.$PopupSession = tag("section", {
         className: "kotlin_suggestion_popup",
      });
      this.$OptionContainer = tag("div", {
         className: "kotlin_suggestion_popup_container",
      });
      this.$PopupSession.append(this.$OptionContainer);
      app.get("main").append(this.$PopupSession);
      this.$;
   }

   addOption(
      { iconPath, tokenText, suggestionType, suggestionAnother },
      element,
      isActive = false
   ) {
      this.$SuggestionOption = tag("div", {
         className: "suggestion_option",
      });
      isActive ? this.$SuggestionOption.classList.add("active") : null;
      this.$SuggestionOption.dataset.info = JSON.stringify(element);
      this.$SuggestionOption_div = tag("div", {
         className: "suggestion_option_div",
      });
      this.$SuggestionOption_Info = tag("div", {
         className: "suggestion_synth_info",
      });
      this.$SuggestionOption.append(this.$SuggestionOption_div);
      this.$SuggestionOption.append(this.$SuggestionOption_Info);
      this.$SuggestionIconeDiv = tag("div", { className: "suggestion_icone" });
      this.$SuggestionIconeDiv.innerHTML = `<svg><image href="${this.baseUrl}${iconPath}" /></svg>`;
      this.$SuggestionOption_div.append(this.$SuggestionIconeDiv);
      this.$SuggestionToken = tag("div", {
         textContent: tokenText,
         className: "suggestion_token",
      });
      this.$SuggestionOption_div.append(this.$SuggestionToken);

      this.$SuggestionType = tag("span", {
         className: "suggestion_type",
         textContent: suggestionType,
      });
      this.$SuggestioAnotherInfo = tag("span", {
         textContent: suggestionAnother,
         className: "suggestion_another_description",
      });

      this.$SuggestionOption_Info.innerHTML = `[${this.$SuggestionType.outerHTML}]~${this.$SuggestioAnotherInfo.outerHTML}`;
      this.$OptionContainer.append(this.$SuggestionOption);
      this.addEvent(this.$SuggestionOption);
   }
   show() {
      const cursorElement = document.querySelector(".ace_cursor");
      const rect = cursorElement.getBoundingClientRect();
      this.navigatPopup(rect);
      const cursorPosition = this.editor.getCursorPosition();
      const cursorLine = cursorPosition.row;
      if (this.cursorPosition === cursorLine) {
         this.$PopupSession.style.display = "flex";
      } else {
         console.log("hide");
         this.hide();
      }
   }

   navigatPopup(rect) {
      if (!this.positionBlocked) {
         console.log("position bloker");
         return;
      }
      const cursorPosition = this.editor.getCursorPosition();
      const cursorLine = cursorPosition.row;
      this.cursorPosition = cursorLine;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;
      let left = rect.left;
      let top = rect.top;
      const bottom = screenHeight - rect.bottom;
      const popupWidth = 280;
      const maxLines = 8;
      const lineHeight = 15;
      if (left + popupWidth >= screenWidth + 20) {
         left = screenWidth - popupWidth;
      }
      this.$PopupSession.style.left = left + "px";
      console.log(
         "left",
         left,
         "top",
         top,
         "offsetWidth",
         this.$PopupSession.offsetWidth,
         "offsetHeight",
         this.$PopupSession.offsetHeight
      );
      console.log(
         "screenHeight",
         screenHeight,
         "screenWidth",
         screenWidth,
         "rectbotom",
         rect.bottom,
         "bottom",
         bottom
      );
      var allowTopdown = top > screenHeight / 2;
      var maxH = maxLines * lineHeight * 1.4;
      console.log(maxH);
      if (allowTopdown) {
         this.$PopupSession.style.top = "";
         this.$PopupSession.style.bottom = screenHeight - top + "px";
      } else {
         this.$PopupSession.style.top = top + rect.height + "px";
         this.$PopupSession.style.bottom = "";
         console.log("condition false");
      }
      //		var maxH = maxLines * lineHeight * 1.4;

      // if ((bottom - this.$PopupSession.offsetHeight) >= 100 && !allowTopdown) {
      //			this.$PopupSession.style.top = `${top - rect.height + 5}px`
      //		} else {
      //			this.$PopupSession.style.top = `${top - this.$PopupSession.offsetHeight - (2 * rect.height) + 1.5}px`
      //		}
   }
   addDataToPopup(dataArray) {
      dataArray.sort((a, b) => relevance(b.line) - relevance(a.line));
      this.$OptionContainer.innerHTML = "";
      if (dataArray.length == 0) {
         this.hide();
         return;
      }
      for (let i = 0; i < dataArray.length; i++) {
         const option = {
            iconPath: "send_blue.svg",
            suggestionType: "Local",
            suggestionAnother: dataArray[i].type,
            tokenText: dataArray[i].name,
         };
         i == 0
            ? this.addOption(option, dataArray[i], true)
            : this.addOption(option, dataArray[i]);
      }
      this.show();
   }
   hide() {
      this.$PopupSession.style.display = `none`;
   }
   addEvent(option) {
      option.addEventListener("click", (e) => {
         console.log(option.dataset.info);
         this.editor.removeWordLeft();
         this.editor.insert(JSON.parse(option.dataset.info).name);
      });
   }
}
mai