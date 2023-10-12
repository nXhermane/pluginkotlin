
import insertTokens from './../util/insertTokens.js'
export default function editorInputEvent(instance, editor) {
	function sendMessageToWorker() {
		instance.Worker.postMessage({ type: "analyse/extract", data: editor.getValue() });
	}
	let lastTimeOutId=null
	editor.addEventListener('input', async () => {
		if (instance.detectKotlinFileCondition) {
			insertTokens(instance,editor)
			clearTimeout(lastTimeOutId)
			lastTimeOutId=setTimeout(sendMessageToWorker, 300)
		}
	})
}
