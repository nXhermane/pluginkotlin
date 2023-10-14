import plugin from "../plugin.json";
const language_tools = ace.require("ace/ext/language_tools");
const themes = acode.require("themes");
const settings = acode.require("settings");
import detectKotlinFileEvent from "./ace/event/detectKotlinFileEvent.js";
import editorInputEvent from "./ace/event/editorInputEvent.js";
import editorKeyDownAndUpEvent from "./ace/event/editorKeyDownAndUpEvent.js";
import workerManager from './ace/workerManager/workerManager.js'
import editorChangeSelectionCursorEvent from "./ace/event/editorChangeSelectionCursorEvent.js";
class KotlinPlugin {
   // kotlin file detect condition
   detectKotlinFileCondition = false;
   // worker instance
   Worker = null;
   // WordTreeManger instance
   WordTree = null;
   // Fist insert tokens in the WordTree
   firtInsertTokens = false;
   async init() {
      detectKotlinFileEvent(this, editorManager);
     
      var primaryColor=localStorage.getItem('__primary_color')
   }
   async start() {
      this.firtInsertTokens = false;
      const { editor } = editorManager;
      this.Worker = new Worker(`${this.baseUrl}worker.js`);
      const instance = this
      this.Worker.addEventListener("message", async () => {
         const { type, info } = JSON.parse(event.data);
         workerManager(instance,type,info)
      });
      // Submit code source to worker and get result to insert on word Manager tree
      this.Worker.postMessage({
         type: "analyse/extract",
         data: editor.getValue(),
      });
      // Add Input event to editor to listener the code change
      editorInputEvent(this, editor);
      // Add keyDown And KeyUp event
      editorKeyDownAndUpEvent(this, editor);
      // Add changeCursor  event to session selection
      editorChangeSelectionCursorEvent(this,editor)
      
   }
   async destroy() {}
}
if (window.acode) {
   const acodePlugin = new KotlinPlugin();
   acode.setPluginInit(
      plugin.id,
      (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
         if (!baseUrl.endsWith("/")) {
            baseUrl += "/";
         }
         acodePlugin.baseUrl = baseUrl;
         acodePlugin.init($page, cacheFile, cacheFileUrl);
      }
   );
   acode.setPluginUnmount(plugin.id, () => {
      acodePlugin.destroy();
   });
}
