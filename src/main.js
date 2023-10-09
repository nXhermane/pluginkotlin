import plugin from '../plugin.json';
const language_tools = ace.require("ace/ext/language_tools")
const tokenizer = ace.require("ace/tokenizer")

// acode commopents & api 
const alert = acode.require("alert");
const confirm = acode.require("confirm");
const prompt = acode.require("prompt");
const appSettings = acode.require("settings");
const helpers = acode.require("helpers");
const fsOperation = acode.require("fsOperation");
const toInternalUrl = acode.require("toInternalUrl");
import { CompletionTrie } from './completion/index.js';
import detectKotlinFileEvent from './interfaceAce/event/detectKotlinFile.js';
import editorInputEventHandlers from './interfaceAce/event/editorInputEventHandlers.js';
import editorChangeEvent from './interfaceAce/event/editorChangeEvent.js';
import suggestionPopup from './interfaceAce/popup/SuggestionPopup/suggestionPopup.js';
class AcodePlugin {
	counter = 0
	worker = null
	baseUrl = ""
	loaded = false
	debut = true
	complet = null
	async init() {
		alert('hello world')
		this.popup = new suggestionPopup(this.baseUrl,editorManager.editor)
		
		
		editorManager.editor.on('gutterkeydown',()=>{
			alert("oui c'est du move")
		})
		

	// 	this.popup.addOption(`${this.baseUrl}send_blue.svg`, 'println', 'Property', '~function to print');
	 //	this.popup.show();

		detectKotlinFileEvent(this, editorManager)
	}
	async commencer() {
		const { editor } = editorManager
		console.log('commencer')
		this.worker = new Worker(`${this.baseUrl}worker.js`);
		this.worker.addEventListener("message", (event) => {
			const result = JSON.parse(event.data);
			this.complet.insert(result.data)
			console.log(result.errorArray)
		})
		this.worker.postMessage(editor.getValue());
		editorInputEventHandlers(this, editor)
		editorChangeEvent(this, editor)
	}
	async destroy() {
	}
}
if (window.acode) {
	const acodePlugin = new AcodePlugin();
	acode.setPluginInit(plugin.id, (baseUrl, $page, { cacheFileUrl, cacheFile }) => {
		if (!baseUrl.endsWith('/')) {
			baseUrl += '/';
		}
		acodePlugin.baseUrl = baseUrl;
		acodePlugin.init($page, cacheFile, cacheFileUrl);
	});
	acode.setPluginUnmount(plugin.id, () => {
		acodePlugin.destroy();
	});
}