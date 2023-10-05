import plugin from '../plugin.json';
//const toast = acode.require('toast')
//import style from './style.scss'

import tree from './grammar/manager/test/testTree.js'




class AcodePlugin {
	async init() {


	window.addEventListener('click',()=>{
		alert('oui commencer')
		const newTree=new tree()
		alert(newTree.duree)
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