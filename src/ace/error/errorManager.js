import icone from "./icone.js";

export default class ErrorManager {
   constructor(editor) {
      this.editor = editor;
      this.addErrorStyles();
   }

   /**
    * Add CSS styles for error icons in the gutter header.
    */
   addErrorStyles() {
      const style = `
         div.kotlin_error {
             display: block;
             width: 100%;
             height: 100%;
         }
         div.kotlin_error > div {
             width: 100%;
             height: 100%;
             display: flex;
             justify-content: center;
             align-items: center;
         }
         div.kotlin_error > div > svg {
             fill: #FF3535;
             width: 0.9em;
             height: 0.9em;
         }
         .kotlin_error_key {
             text-decoration: underline wavy var(--error-text-color);
             text-decoration-thickness: 10%;
         }
      `;
      const $style = document.createElement("style");
      $style.id = "kotlin_error";
      $style.innerHTML = style;
      document.head.append($style);
   }

   /**
    * Create an error icon in the gutter header.
    * @param {HTMLElement} gutterCell - The target gutter element.
    * @param {String} iconName - The name of the icon to be displayed.
    */
   createErrorIcon(gutterCell, iconName) {
      const errorIcon = document.createElement("div");
      errorIcon.className = "kotlin_error";
      const iconContainer = document.createElement("div");
      iconContainer.innerHTML = icone(iconName);
      errorIcon.appendChild(iconContainer);
      const style = window.getComputedStyle(gutterCell);
      const child = gutterCell.lastElementChild;
      const childSpan = child.querySelector("span");
      childSpan.append(errorIcon);
      childSpan.classList.add("ace_icon");
      childSpan.style.height = "100%";
      child.style.display = "block";
      child.style.height = style.getPropertyValue("height");
      child.classList.add("ace_gutter_annotation");
   }

   /**
    * Remove all error icons from the DOM.
    */
   removeAllErrorIcons() {
      const errorIcons = document.body.querySelectorAll("div.kotlin_error");
      errorIcons.forEach((icon) => {
         icon.remove();
      });
   }

   /**
    * Apply a special CSS class to the element corresponding to an error symbol.
    * @param {HTMLElement} lineGroup - The corresponding line group.
    * @param {string} symbol - The error symbol to search for.
    */
   applyCssClassToSymbol(lineGroup, symbol) {
      const elList = lineGroup.querySelectorAll("div.ace_line>span");
      const el = Array.from(elList).find((e) => e.textContent === symbol);
      if (el) {
         el.classList.add("kotlin_error_key");
      }
   }

   /**
    * Find the gutter element and HTML line group corresponding to a given error line number.
    * @param {number} line - The line number (as an integer) to search for.
    * @return {Object|null} - An object containing two properties: 'gutterCell' (the gutter element) and 'lineGroup' (the corresponding line group).
    * If no match is found, it returns null.
    */
   findGutterElementsForErrorLine(line) {
      const gutterContainer = this.editor.container.querySelector(
         "div.ace_layer.ace_gutter-layer"
      );
      const gutterLayerCellList = gutterContainer.querySelectorAll(
         "div.ace_gutter-cell"
      );
      const aceContent = this.editor.container.querySelector(
         "div.ace_content>div.ace_layer.ace_text-layer"
      );
      const aceLineGroupsList =
         aceContent.querySelectorAll("div.ace_line_group");

      for (let i = 0; i < gutterLayerCellList.length; i++) {
         const el = gutterLayerCellList[i];
         if (line == parseInt(el.textContent)) {
            return { gutterCell: el, lineGroup: aceLineGroupsList[i] };
         }
      }

      return null;
   }

   /**
    * Identify the icon name and message for an error.
    * @param {Object} error - The error object.
    * @return {Object} - An object with 'msg' and 'icon' properties.
    */
   identifyIconeNameAndMsg(error) {
      if (error.msg.includes("extraneous input")) {
         return {
            msg: `Syntax error caused by: ${error.symbole[0]} : ${error.msg}`,
            icon: "error",
         };
      } else {
         return {
            msg: `Unknown error: ${error.msg}`,
            icon: "warning",
         };
      }
   }

   /**
    * Manage errors by applying appropriate icons and CSS classes.
    * @param {Array} errorArray - An array of error objects.
    */
   errorManagement(errorArray) {
      if (errorArray.length === 0) return;
      for (let i = 0; i < errorArray.length; i++) {
         let error = errorArray[i];
         let el = this.findGutterElementsForErrorLine(error.line);
         if (el == null) continue;
         this.applyCssClassToSymbol(el.lineGroup, error.symbole[0]);
         let errorInfo = this.identifyIconeNameAndMsg(error);
         this.createErrorIcon(el.gutterCell, errorInfo.icon);
      }
   }
}