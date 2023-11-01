import relevance from "../../util/relevance.js";
import getPrefix from "../../util/prefix.js";
import style from "./style.js";
import Icone from "./icone.js";
import IconeAssocite from "./keyTypeIcone.js";
const settings = acode.require("settings");
/**
 * suggestionPopup - Represents a suggestion popup for displaying options in an editor.
 * This class provides methods to initialize the popup, add and manage options, and control its visibility.
 */
export default class suggestionPopup {
   constructor(baseUrl, editor) {
      this.baseUrl = baseUrl;
      this.editor = editor;
      this.isBlocked = false;
      this.maxlines = 8;
      this.lineHeigth = 13.33;
      this.popupWidth = 280;
      this.isOpen = false;
      const { $Popup, $PopupOptionContainer } = this.$initDom();
      this.Popup = $Popup;
      this.OptionContainer = $PopupOptionContainer;
      this.changeListener = this.changeListener.bind(this);
      this.blurListener = this.blurListener.bind(this);
      this.eventHide = new Event("hide");
      this.eventShow = new Event("show");
      this.eventSelect = new Event("select");
      this.event();
   }

   /**
    * Initializes the DOM by creating and adding necessary elements.
    * @method
    * @returns {{Element, Element}} An object containing the created DOM elements: {$Popup, $PopupOptionContainer}.
    */
   $initDom() {
      const { baseUrl } = this;
      const $style = tag("style", { id: "kotlin_popup" });
      $style.innerHTML = style();
      document.head.append($style);
      this.$Popup = tag("section", { id: "kotlin_popup_completion" });
      this.$PopupOptionContainer = tag("div", {
         className: "optionContainer",
      });
      this.$Popup.append(this.$PopupOptionContainer);
      document.body.append(this.$Popup);
      return {
         $Popup: this.$Popup,
         $PopupOptionContainer: this.$PopupOptionContainer,
      };
   }

   /**
    * Adds an option to the suggestion popup.
    * @method
    * @param {Object} options - The option details.
    * @param {string} options.tokenText - The text for the option.
    * @param {string} options.suggestionType - The type of suggestion.
    * @param {string} options.iconPath - The path to the icon for the option.
    * @param {any} element - The data associated with the option.
    * @param {boolean} isActive - Indicates if the option is active (selected).
    */
   addOption({ tokenText, suggestionType, icone }, element, isActive = false) {
      // Create DOM elements for the option
      let $Option = tag("div", { className: "Option" });

      let $token = tag("div", { className: "token" });
      let $tokenIcone = tag("div", { className: "tokenIcone" });
      $tokenIcone.innerHTML = `${icone}`;
      let $tokenText = tag("div", { className: "tokenText" });
      let $p = tag("p", { textContent: tokenText });
      $tokenText.append($p);
      let $tokenInfo = tag("div", { className: "tokenInfo" });
      let $span = tag("span", { textContent: suggestionType });
      $tokenInfo.append($span);
      // Assemble the option elements
      $token.append($tokenIcone, $tokenText);
      $Option.append($token, $tokenInfo);
      $Option.dataset.info = JSON.stringify(element);
      // Set the option as active, if specified
      if (isActive) {
         $Option.classList.add("active");
      }
      // Add the option to the suggestion popup container
      this.Popup.querySelector("div.optionContainer").append($Option);
      // Attach click and key event handlers to the option
      this.addClickEventToOption($Option);
      return $Option;
   }

   /**
    * Move the suggestion popup based on the cursor position and screen dimensions.
    * @method
    * @param {boolean} topDownOnly - If true, restrict the popup to move downward only.
    */
   move(topDownOnly = false) {
      const screenHeight = window.innerHeight;
      const screenWidth = window.innerWidth;
      const el = this.Popup;
      const elWidth = this.popupWidth;
      const elHeight = el.offsetHeight;
      const cursorElement = document.querySelector(".ace_cursor");
      const rect = cursorElement.getBoundingClientRect();
      const maxH = this.maxlines * this.lineHeigth * 1.4;
      const { top, left, bottom, height } = rect;
      const allowTopDown = top > screenHeight / 2 || topDownOnly;
      const allowLeftRigth = screenWidth - elWidth - left > 0;
      const prefixSize = this.measure(getPrefix(this.editor));
      // Check if the popup should be moved downward
      if (allowTopDown && top + this.lineHeigth + maxH > screenHeight) {
         el.style.top = "";
         el.style.bottom = screenHeight - top + "px";
      } else {
         el.style.bottom = "";
         el.style.top = top + height + "px";
      }
      // Check if the popup is blocked (no further movement)
      if (this.isBlocked) return;
      // Adjust the popup's position to the left or right
      if (!allowLeftRigth) {
         el.style.left = screenWidth - elWidth + "px";
      } else {
         el.style.left = left - prefixSize + "px";
      }
   }

   /**
    * Add options to the suggestion popup based on the provided data.
    *
    * @param {Array} data - An array of data representing suggestions to display.
    */
   addOptionToPopup(data) {
      if (data.length == 0) {
         this.hide();
         return;
      }
      // Sort the data based on relevance (assuming a relevance function exists)
      data.sort((a, b) => relevance(b.line) - relevance(a.line));
      // Clear the existing options in the suggestion popup
      this.Popup.querySelector("div.optionContainer").innerHTML = "";

      // Loop through the data and add each suggestion as an option
      for (let i = 0; i < data.length; i++) {
         const isActive = i == 0;
         const icone = Icone(IconeAssocite(data[i].type));
         this.addOption(
            {
               tokenText: data[i].name,
               suggestionType: data[i].type,
               icone: icone,
            },
            data[i],
            isActive
         );
      }

      if (!this.isOpen) {
         this.show();
      }
      this.applyColor(getPrefix(this.editor));
   }

   show() {
      this.move();
      this.Popup.dispatchEvent(this.eventShow);
      this.Popup.style.display = "flex";
      this.isOpen = true;
   }
   hide() {
      if (!this.isOpen) return;
      this.Popup.dispatchEvent(this.eventHide);
      this.Popup.style.display = "none";
      this.isOpen = false;
      console.log("yest");
   }
   detach() {
      if (this.isOpen) {
         this.hide();
         this.isBlocked = false;
      }
   }
   goTo(direction) {
      const options = Array.from(
         this.OptionContainer.querySelectorAll("div.Option")
      );
      const elSelected =
         this.OptionContainer.querySelector("div.Option.active");

      let elSelectedIndex = options.indexOf(elSelected);
      switch (direction) {
         case "up":
            this.setRow(
               elSelectedIndex - 1 < 0
                  ? options.length - 1
                  : elSelectedIndex - 1
            );
            break;
         case "down":
            this.setRow(
               elSelectedIndex + 1 > options.length - 1
                  ? 0
                  : elSelectedIndex + 1
            );
            break;
         case "start":
            this.setRow(0);
            break;
         case "end":
            this.setRow(options.length - 1);
            break;
      }
   }
   setRow(row) {
      const options = Array.from(
         this.OptionContainer.querySelectorAll("div.Option")
      );
      const elSelected =
         this.OptionContainer.querySelector("div.Option.active");
      if (elSelected) {
         elSelected.classList.remove("active");
         elSelected.querySelector("div.tokenInfo>span").innerHTML = JSON.parse(
            elSelected.dataset.info
         ).type;
      }
      options[row].classList.add("active");
      this.Popup.dispatchEvent(this.eventSelect);
   }
   measure(string) {
      const cursorParent = document.querySelector("div.editor-container");
      const el = tag("span", { textContent: string });
      cursorParent.append(el);
      el.style.padding = "0px";
      el.style.margin = "0px";
      const width = el.offsetWidth;
      cursorParent.removeChild(el);
      console.log(width - 5);
      return width - 5;
   }
   event() {
      const popup = this.editor;
      const renderer = popup.renderer;
      const session = popup.session;
      popup.on("changeSelection", this.changeListener);
      popup.on("blur", this.blurListener);
   }
   changeListener(e) {
      this.detach();
   }
   blurListener(e) {
      const el = document.activeElement;
      const textInput = this.editor.textInput.getElement();
      this.detach = this.detach.bind(this);
      if (el != textInput) {
         setTimeout(this.detach, 50);
      }
   }
   addClickEventToOption(el) {
      el.addEventListener("click", async (e) => {
         const options = Array.from(
            this.OptionContainer.querySelectorAll("div.Option")
         );
         const row = options.indexOf(el);
         if (row) this.setRow(row);
         this.editor.removeWordLeft();
         this.editor.insert(JSON.parse(el.dataset.info).name);
      });
   }
   on(event, callback) {
      this.Popup.addEventListener(event, callback);
   }
   off(event, callback) {
      this.Popup.removeEventListener(event, callback);
   }
   getData() {
      const option = this.OptionContainer.querySelector("div.Option.active");
      if (option) return JSON.parse(option.dataset.info);
   }
   getRow() {
      return this.OptionContainer.querySelector("div.Option.active");
   }
   insertInEditor() {
      const el = this.getRow();
      if (el) {
         this.editor.removeWordLeft();
         this.editor.insert(JSON.parse(el.dataset.info).name);
      }
   }

   applyColor(prefix) {
      if (!this.isOpen) return;
      const optionList = this.OptionContainer.querySelectorAll("div.Option");
      for (let i = 0; i < optionList.length; i++) {
         let el = optionList[i].querySelector("div.tokenText>p");
         let elText = el.innerText;
         console.log(elText);
         let elColoredText = "";
         for (let j = 0; j < elText.length; j++) {
            var letter = elText[j];
            if (prefix.includes(letter)) {
               elColoredText += `<span style="color:var(--popup-active-color)">${letter}</span>`;
            } else {
               elColoredText += letter;
            }
         }
         el.innerHTML = elColoredText;
      }
   }
}
