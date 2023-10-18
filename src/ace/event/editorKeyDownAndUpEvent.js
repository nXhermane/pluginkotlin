import getPrefix from "./../util/prefix.js";
import insertOccurenceInfo from "./../util/insertOccurenceInfo.js";
import Popup from "./../popup/suggestionPopup/suggestionPopup.js";
export default function editorKeyDownEvent(instance, editor) {
   let keyupEventHandler = async (event) => {
      if (
         event.key === "ArrowUp" ||
         event.key === "ArrowDown" ||
         event.key === "Tab" ||
         event.key === "Enter"
      ) {
         return;
      }
      let prefix = getPrefix(editor);
      if (prefix.trim() == "" || prefix.trim() == "undefined") {
         return;
      }
      let searchArray = await instance.WordTree.search(prefix);
      await insertOccurenceInfo(editor, searchArray);
      console.log(searchArray);
   };
   editor.container
      .querySelector(".ace_text-input")
      .addEventListener("keydown", async () => {
         if (instance.detectKotlinFileCondition) {
            instance.popup.move();
            editor.container
               .querySelector(".ace_text-input")
               .addEventListener("keyup", keyupEventHandler);
         }
      });
}
