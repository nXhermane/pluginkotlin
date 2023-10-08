
import { CompletionTrie } from './../../completion/index.js'
export default function detectKotlinFileEvent(instance,editorManager){
	editorManager.on('switch-file', (file) => {
			const cond = file.name.endsWith('.kt')
			instance.condition = cond
			console.log(instance.baseUrl + "plugin.json")
			if (file && cond) {
				editorManager.editor.setOptions({
					enableBasicAutocompletion: false,
					enableSnippets: false,
					enableLiveAutocompletion: false
				});
				instance.complet = new CompletionTrie()
				instance.commencer()
			} else {
				instance.worker.terminate();
				editorManager.editor.setOptions({
					enableBasicAutocompletion: true,
					enableSnippets: true,
					enableLiveAutocompletion: true
				});
			}
		});
}