import WordTreeManager from "./../../completion/index.js";
/**
 * Fonction to add event on @editorManager to detect when user open kotlin file
 * @param instance
 *			 the plugin class instance
 * @param editorManager
 *			 Acode editor manager
 */

export default function detectKotlinFileEvent(instance, editorManager) {
   /**
    * Add Event to detect when the user open the file with .kt or .kts extension
    */
   editorManager.on("switch-file", (file) => {
      const conditionForKt = file.name.endsWith(".kt");
      const conditionForKts = file.name.endsWith(".kts");
      // condition to verify if the file opened is kotlin file
      instance.detectKotlinFileCondition = conditionForKt || conditionForKts;
      if (file && instance.detectKotlinFileCondition) {
         // Disable the default autocompletion
         editorManager.editor.setOptions({
            enableBasicAutocompletion: false,
            enableSnippets: false,
            enableLiveAutocompletion: false,
         });
         // create a new instance of WordTreeManager
         instance.WordTree = new WordTreeManager();
         // Start orther Operation
         // Call the plugin acode methode start()
         instance.start();
      } else {
         editorManager.editor.setOptions({
            enableBasicAutocompletion: true,
            enableSnippets: true,
            enableLiveAutocompletion: true,
         });
         // Close the worker
         instance.Worker?.terminate();
         // Hide the Popup
         instance.popup?.hidePopup();
      }
   });
}
