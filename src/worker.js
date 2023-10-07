import { wrap } from 'comlink';

// Importez la fonction analyse du fichier principal
import { analyse } from 'comlink:./';

// Utilisez Comlink pour envelopper la fonction analyse
const wrappedAnalyse = wrap(analyse);

// Écoutez les messages du thread principal
self.onmessage = async function (e) {
  const { sourceCode } = e.data;

  // Appelez la fonction analyse enveloppée
  const result = await wrappedAnalyse(sourceCode);

  // Envoyez le résultat au thread principal
  self.postMessage(result);
};