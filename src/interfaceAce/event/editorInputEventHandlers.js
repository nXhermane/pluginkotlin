
import insertTokens from './../state/insertTokens.js'

export default function editorInputEventHandlers(instance, editor) {
	editor.addEventListener('input', async () => {
		if (instance.condition) {
			insertTokens(instance,editor)
			
			if (instance.counter == 10) {
				// Écoutez les messages du worker
				instance.counter = 0
				console.log('recherche lancer')
				instance.worker.postMessage(editor.getValue());
			}

			instance.counter++
		}
	})
}
