import plugin from '../plugin.json';
import {test} from './completion/grammar/manager/test/testTree'
class AcodePlugin {

	async init() {
		alert('hello world')
		editorManager.on('switch-file', (file) => {
			alert("l'evenemnt fonctionne")
			const cond=file.name.endsWith('.kt')
			alert(cond)
    if (file) {
        alert(file.name);
    }
    window.addEventListener('click',()=>{
		const acodeTest=new test()
		alert(`Temps d'analyse => ${acodeTest.fin - acodeTest.depart} ms`)
    })
});


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