import scope from "./../scope/index.js";

export default function editorChangeSelectionEvent(instance, editor) {
   editor.addEventListener("changeSelection", async () => {
      if (instance.detectKotlinFileCondition) {
         scope(editor);
      }
   });
}
