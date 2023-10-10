

export default function editorFocusEvent(instance, editor) {
	document.addEventListener('keydown', async () => {
		const cursorElement = document.querySelector('.ace_cursor')
		const rect = cursorElement.getBoundingClientRect()
		instance.popup.navigatPopup(rect)
		instance.getPrefixIsPossible=false
		console.log("keydown")
	})
}

