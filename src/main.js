import plugin from "../plugin.json";
const language_tools = ace.require("ace/ext/language_tools");
const HashHandler = ace.require("ace/keyboard/hash_handler").HashHandler;
const themes = acode.require("themes");
const settings = acode.require("settings");
var Range = ace.require("ace/range").Range;
import detectKotlinFileEvent from "./ace/event/detectKotlinFileEvent.js";
import editorInputEvent from "./ace/event/editorInputEvent.js";
import editorKeyDownAndUpEvent from "./ace/event/editorKeyDownAndUpEvent.js";
import workerManager from "./ace/workerManager/workerManager.js";
import Popup from "./ace/popup/index.js";
import style, { markerStyle } from "./ace/popup/suggestionPopup/style.js";
import errorManager from "./ace/error/errorManager.js";
import Native from "./completion/native/index.js";
import Scope from "./ace/scope/scope.js";
const TokenIterator = ace.require("ace/token_iterator").TokenIterator;
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
        settings.on("update", fontSize => {
            let el = document.head.querySelector("#kotlin_popup");
            el.innerHTML = "";
            el.innerHTML = style();
        });
        const wasmScript = tag("script", {
            src: this.baseUrl + "dist/sql-wasm.js",
            id: "sqljs"
        });
        document.head.append(wasmScript);
        this.native = new Native(this.baseUrl);
    }
    async start() {
        const markerBack = editorManager.editor.renderer.$markerBack;
        const markerFront = editorManager.editor.renderer.$markerFront;

        const scope = new Scope(editorManager.editor);
        editorManager.editor.on("changeSelection", () => {
            const startScope = scope.findCurrentScope();
            if (!startScope) return;
            const scopeRange = scope.getScopeRange(startScope);
            function firstColumn(row, column = 0) {
                const Iterator = new TokenIterator(
                    editorManager.editor.session,
                    row,
                    column
                );
                let token = Iterator.getCurrentToken();
                while (true) {
                    if (token.value != " " && token.type != "text") {
                        return { column: Iterator.getCurrentTokenColumn() };
                    }
                    token = Iterator.stepForward();
                    if (token == null) break;
                }
            }
            if (scopeRange.start.row === scopeRange.end.row) {
                const markers = markerBack.markers;
                markers[5] = {
                    range: scopeRange,
                    renderer: null,
                    type: "text",
                    inFront: false,
                    id: 5,
                    clazz: "sameLine"
                };
                console.log("sameLine", markers);
                markerBack.setMarkers(markers);
                markerBack.update(markerBack.config);
            } else {
                const markers = markerBack.markers;
                const column = firstColumn(scopeRange.start.row);
                const otherLineRange = new Range(
                    scopeRange.start.row + 1,
                    column.column,
                    scopeRange.start.row + 1,
                    column.column + 1
                );
                const markerStyleEl =
                    document.head.querySelector("#markerStyle") ||
                    tag("style", { id: "markerStyle" });
                if (!markerStyleEl.parentNode)
                    document.head.append(markerStyleEl);
                markerStyleEl.innerHTML = markerStyle(
                    scopeRange.end.row - scopeRange.start.row
                );
                markers[5] = {
                    range: otherLineRange,
                    renderer: null,
                    type: "text",
                    inFront: true,
                    id: 6,
                    clazz: "bckg"
                };
                console.log("not same Line", markers);
                markerBack.setMarkers(markers);
                markerBack.update(markerBack.config);
            }
        });
        this.native.prepareAll(this.WordTree).then(stmt => {
            console.log(stmt);
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
            data: editor.getValue()
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
