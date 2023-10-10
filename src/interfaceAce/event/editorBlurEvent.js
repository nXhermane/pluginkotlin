

export default function editorBlurEvent(instance,editor){
	editor.addEventListener('blur',async ()=>{
		instance.popup.hide()
	})
}