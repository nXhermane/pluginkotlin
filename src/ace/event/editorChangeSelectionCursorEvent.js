import scope from "./../scope/index.js";

export default function editorChangeSelectionCursorEvent(instance, editor) {
   editor.session.selection.on("changeCursor", function (e) {
      if (instance.detectKotlinFileCondition) {
	scope(editor);
         const cursorPosition = editor.getCursorPosition();
         
      }
   });
}
