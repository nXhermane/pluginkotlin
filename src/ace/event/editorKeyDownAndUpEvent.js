import getPrefix from "./../util/prefix.js";
import insertOccurenceInfo from "./../util/insertOccurenceInfo.js";
import Popup from "./../popup/suggestionPopup/suggestionPopup.js";
export default function editorKeyDownEvent(instance, editor) {
   let keyupEventHandler = async (event) => {
      if (instance.detectKotlinFileCondition) {
         instance.popup.move();
         if (
            event.key === "ArrowUp" ||
            event.key === "ArrowDown" ||
            event.key === "Tab" ||
            event.key === "Enter"
         ) {
            if (instance.popup.isOpen) {
               return;
            } else {
               instance.lastPrefixLength = 0;
               instance.popup.hidePopup();
               instance.popup.isBlocked = false;
               return;
            }
         }
         if (
            event.key === "ArrowRight" ||
            event.key === "ArrowLeft" ||
            event.key === "Backspace"
         ) {
            if (
               instance.lastKey !== "Unidentified" &&
               instance.lastPrefixLength == 0
            ) {
               instance.popup.hidePopup();
               instance.popup.isBlocked = false;
               return;
            } else {
               instance.lastKey = event.key;
            }
         } else {
            instance.lastKey = event.key;
         }

         let prefix = getPrefix(editor);

         instance.lastPrefixLength = prefix.length;
         if (prefix.trim() == "" || prefix.trim() == "undefined") {
            instance.popup.isBlocked = false;
            instance.popup.hidePopup();
            return;
         }
         instance.popup.isBlocked = true;
         let searchArray = await instance.WordTree.search(prefix);
         await insertOccurenceInfo(editor, searchArray);
         console.log(prefix);
         console.log(searchArray);
         instance.popup.setData(searchArray);
      }
   };
   editor.container
      .querySelector(".ace_text-input")
      .addEventListener("keydown", async () => {
         if (instance.detectKotlinFileCondition) {
            editor.textInput
               .getElement()
               .addEventListener("keyup", keyupEventHandler);
         }
      });
}
