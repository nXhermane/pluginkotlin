
// import GenerateTree from './parser/manager/astGenerator.js'
// import KotlinLexer from './parser/antlr4_res/KotlinLexer.js';
// import KotlinParser from './parser/antlr4_res/KotlinParser.js';
// import KotlinParserVisitor from './parser/antlr4_res/KotlinParserVisitor.js';
// import CustomErrorListener from './parser/manager/customClass/CustomErrorListener.js'
// import CustomVisitor from './parser/manager/customClass/CustomVisitor.js'
// export default function tree(sourceCode) {

//	const workerCode = `
// function analyse(sourceCode,GenerateTree,KotlinLexer,KotlinParser,CustomErrorListener,CustomVisitor) {
//     const debut = Date.now();
   
//			 let newTree = new GenerateTree(sourceCode)
//        .applyLexer(KotlinLexer)
//        .applyParser(KotlinParser)
//        .applyCustomError(CustomErrorListener)
//        .generate()
//        .applyVisitor(CustomVisitor)
//        .build();
//     const fin = Date.now();
//     return "newTree";
// }
// self.onmessage =function(e) {
//	const {sourceCode,GenerateTree,KotlinLexer,KotlinParser,CustomErrorListener,CustomVisitor}= e.data
//	const result =analyse(sourceCode,GenerateTree,KotlinLexer,KotlinParser,CustomErrorListener,CustomVisitor) 
//	self.postMessage(result);
// }
// `
// const blob = new Blob([workerCode], { type: 'application/javascript' });

// // Créez un objet URL à partir du Blob
// const workerURL = URL.createObjectURL(blob);

// // Créez un worker à partir de l'URL de l'objet Blob
// const myWorker = new Worker(workerURL);
// myWorker.onmessage = function(e) {
//  console.log('Résultat du worker :', e.data);
// };

// // Envoyez un message au worker
// myWorker.postMessage({sourceCode,GenerateTree,KotlinLexer,KotlinParser,CustomErrorListener,CustomVisitor});
// }

import { expose } from 'comlink';
import GenerateTree from './parser/manager/astGenerator.js';
import KotlinLexer from './parser/antlr4_res/KotlinLexer.js';
import KotlinParser from './parser/antlr4_res/KotlinParser.js';
import KotlinParserVisitor from './parser/antlr4_res/KotlinParserVisitor.js';
import CustomErrorListener from './parser/manager/customClass/CustomErrorListener.js';
import CustomVisitor from './parser/manager/customClass/CustomVisitor.js';

// Définition de votre fonction analyse
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
const myWorker = new Worker(URL.createObjectURL(new Blob([`${import.meta.url.replace(/[/][^/]*$/, '/')}/workerr.js`])));
myWorker.onmessage = function (e) {
  console.log('Résultat du worker :', e.data);
};

myWorker.postMessage({ sourceCode });
