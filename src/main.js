import plugin from "../plugin.json";
const language_tools = ace.require("ace/ext/language_tools");
const HashHandler = ace.require("ace/keyboard/hash_handler").HashHandler;
const themes = acode.require("themes");
const settings = acode.require("settings");
import detectKotlinFileEvent from "./ace/event/detectKotlinFileEvent.js";
import editorInputEvent from "./ace/event/editorInputEvent.js";
import editorKeyDownAndUpEvent from "./ace/event/editorKeyDownAndUpEvent.js";
import workerManager from "./ace/workerManager/workerManager.js";
import Popup from "./ace/popup/index.js";
import style from "./ace/popup/suggestionPopup/style.js";
import errorManager from "./ace/error/errorManager.js";
import Dao from "./completion/native/dao.js";
class KotlinPlugin {
   // kotlin file detect condition
   detectKotlinFileCondition = false;
   // worker instance
   Worker = null;
   // WordTreeManger instance
   WordTree = null;
   // Fist insert tokens in the WordTree
   firtInsertTokens = false;
   // Last key
   lastKey = null;
   // prefix length
   lastPrefixLength = 0;
   async init() {
      detectKotlinFileEvent(this, editorManager);
      this.hashHandler = new HashHandler();
      this.popup = new Popup(this.baseUrl, editorManager.editor, this);
      editorManager.editor.popup = this.popup;
      this.errorManager = new errorManager(editorManager.editor);
      var primaryColor = localStorage.getItem("__primary_color");
      settings.on("update", (fontSize) => {
         let el = document.head.querySelector("#kotlin_popup");
         el.innerHTML = "";
         el.innerHTML = style();
      });
      const wasmScript = tag("script", {
         src: this.baseUrl + "dist/sql-wasm.js",
         id: "sqljs",
      });
      document.head.append(wasmScript);
      this.dao = new Dao(this.baseUrl);
   }
   async start() {
      this.dao.getDb().then((db) => {
         const stmt = db.prepare(
            "SELECT * FROM kotlin_native WHERE id_native BETWEEN $start AND $end"
         );
         stmt.getAsObject({ $start: 1, $end: 6 });
         while (stmt.step()) {
            const row = stmt.getAsObject();
            console.log("Here is a row: " + JSON.stringify(row));
         }
      });
      this.firtInsertTokens = false;
      const { editor } = editorManager;
      this.Worker = new Worker(`${this.baseUrl}worker.js`);
      const instance = this;
      this.Worker.addEventListener("message", async () => {
         const { type, info } = JSON.parse(event.data);
         workerManager(instance, type, info);
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
