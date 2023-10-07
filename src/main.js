import plugin from '../plugin.json';
const language_tools = ace.require("ace/ext/language_tools")
const tokenizer = ace.require("ace/tokenizer")
const autoCompletion = ace.require()
import completion from './completion/index.js'
import GenerateTree from './completion/parser/manager/astGenerator.js'
import KotlinLexer from './completion/parser/antlr4_res/KotlinLexer.js';
import KotlinParser from './completion/parser/antlr4_res/KotlinParser.js';
import KotlinParserVisitor from './completion/parser/antlr4_res/KotlinParserVisitor.js';
import CustomErrorListener from './completion/parser/manager/customClass/CustomErrorListener.js'
import CustomVisitor from './completion/parser/manager/customClass/CustomVisitor.js'
//import tree from './completion/worker.js'
import { expose } from 'comlink';
class AcodePlugin {
	complet = null
	async init() {
		alert('hello world')
		editorManager.on('switch-file', (file) => {
			const cond = file.name.endsWith('.kt')
			this.condition = cond
			if (file && cond) {
				this.complet = new completion()
				editorManager.editor.setOptions({
					enableBasicAutocompletion: false,
					enableSnippets: false,
					enableLiveAutocompletion: false
				});
				this.commencer()
			} else {
				editorManager.editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				});
			}

		});


	}
	async commencer() {
		console.log('commencer')

		const { editor } = editorManager
		editor.addEventListener('blur', async () => {
			if (this.condition) {
				// const session = editor.getSession();
				// 				for (let i = 0; i <= session.getLength(); i++) {
				// 					const tokens = session.getTokens(i)
				// 					console.log(tokens)
				// 				}
				// await this.complet.analyse(editor.getValue())
				// await this.complet.extract()

				// console.log("on change permetant de recuperer les element  activer")

			}
		})
		editor.addEventListener("changeSelection", async () => {
			if (this.condition) {
				// const cursorPosition = editor.getCursorPosition();
				// 				const cursorLine = cursorPosition.row;
				// 				const cursorColumn = cursorPosition.column;
				// 				const currentLine = editor.session.getLine(cursorLine);
				// 				//console.log(currentLine)
				// 				let lastNonAlphabeticCharIndex = -1;
				// 				for (let i = cursorColumn - 1; i >= 0; i--) {
				// 					if (!/[a-zA-Z0-9_]/.test(currentLine[i])) {
				// 						lastNonAlphabeticCharIndex = i;
				// 						break;
				// 					}
				// 				}
				// 				const prefix = currentLine.substring(lastNonAlphabeticCharIndex + 1, cursorColumn);
				// 				console.log(`le prefix est ${prefix}`)
				// 
				//				function startCalcul() {
				//					const sourceCode="fun hello(){ println('hello')}"
				//					tree(sourceCode)
				//				}
				//				startCalcul()
				// await this.complet.analyse(editor.getValue())
				//				await this.complet.extract()
				// console.log('on change')
				// console.log(await this.complet.search('b'))
				//editor.container.querySelector('textarea.ace_text-input').i

					const sourceCode="fun hello(){ println('hello')}"
				function analyse(sourceCode) {
					const debut = Date.now();
					let newTree = new GenerateTree(sourceCode)
						.applyLexer(KotlinLexer)
						.applyParser(KotlinParser)
						.applyCustomError(CustomErrorListener)
						.generate()
						.applyVisitor(CustomVisitor)
						.build();
					const fin = Date.now();
					return "newTree";
				}

				// Exposer la fonction analyse via Comlink
				expose(analyse);

				// Créer le worker et envoyer un message au worker
				const myWorker = new Worker(URL.createObjectURL(new Blob([`${import.meta.url.replace(/[/][^/]*$/, '/')}/worker.js`])));
				myWorker.onmessage = function (e) {
					console.log('Résultat du worker :', e.data);
				};

				myWorker.postMessage({ sourceCode });

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


