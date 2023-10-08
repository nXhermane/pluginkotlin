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
import { CompletionTrie } from './completion/index.js'

class AcodePlugin {
	counter = 0
	worker = null
	baseUrl = ""
	loaded = false
	debut = true
	async init() {
		alert('hello world')
		editorManager.on('switch-file', (file) => {
			const cond = file.name.endsWith('.kt')
			this.condition = cond
			console.log(this.baseUrl + "plugin.json")
			if (file && cond) {
				editorManager.editor.setOptions({
					enableBasicAutocompletion: false,
					enableSnippets: false,
					enableLiveAutocompletion: false
				});
				this.complet = new CompletionTrie()
				this.commencer()
			} else {
				this.worker.terminate();
				editorManager.editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				});
			}
		});

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

		editor.addEventListener('input', async () => {
			if (this.condition) {
				const tokenArray = []
				const session = editor.getSession();
				for (let i = 0; i < session.getLength(); i++) {
					const tokens = session.getTokens(i);
					for (let j = 0; j < tokens.length; j++) {
						const token = {
							name: tokens[j].value,
							type: tokens[j].type
						};
						if (
							token.type === "identifier" ||
							token.type === "keyword.other.kotlin" ||
							token.type === "entity.name.variable.kotlin" ||
							token.type === "storage.type.buildin.kotlin" ||
							token.type === "variable.parameter.function.kotlin" ||
							token.type === "string" ||
							token.type === "constant.numeric.kotlin" ||
							token.type === "keyword"
						) {
							tokenArray.push(token);
						}
					}
				}
				const uniqueArray = Array.from(new Set(tokenArray.map(JSON.stringify)), JSON.parse);
				async function insertion(array,complet){
					for(let i=0;i<array.length;i++){
						const resultArray= await complet.search(array[i].name)
						for(let j=0;j<resultArray.length;j++){
							if(resultArray[j].hasOwnProperty('scope')){
								array.splice(i,1)
							}
						}
					}
					return array
				}
				const complet=this.complet
				this.complet.insert(await insertion(uniqueArray,complet))


				if (this.counter == 10) {
					// Écoutez les messages du worker
					this.counter = 0
					console.log('recherche lancer')
					this.worker.postMessage(editor.getValue());
				}
				this.counter++
			}
		})
		editor.addEventListener("changeSelection", async () => {
			if (this.condition) {
				const cursorPosition = editor.getCursorPosition();
				const cursorLine = cursorPosition.row;
				const cursorColumn = cursorPosition.column;
				const currentLine = editor.session.getLine(cursorLine);

				let lastNonAlphabeticCharIndex = -1;
				for (let i = cursorColumn - 1; i >= 0; i--) {
					if (!/[a-zA-Z0-9_]/.test(currentLine[i])) {
						lastNonAlphabeticCharIndex = i;
						break;
					}
				}
				const prefix = currentLine.substring(lastNonAlphabeticCharIndex + 1, cursorColumn);
				if (prefix != '') {
					const session = editor.getSession();
					const searchArray = await this.complet.search(prefix)
					for (let i = 0; i < session.getLength(); i++) {
						const tokens = session.getTokens(i)
						for (let j = 0; j < tokens.length; j++) {
							for (let s = 0; s < searchArray.length; s++) {
								if (searchArray[s].name === tokens[j].value) {
									console.log(searchArray[s], tokens[j])
									const line = cursorLine - i
									const column = cursorColumn - j
									if (!searchArray[s].hasOwnProperty('line')) {
										searchArray[s].line = []
										searchArray[s].line.push(line)
									} else {
										searchArray[s].line.push(line)
									}
									console.log(searchArray[s])
								}
							}
						}
					}
				}
			}
		})
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