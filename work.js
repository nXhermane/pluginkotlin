

// Vérifiez si le code s'exécute dans le thread principal
export default function tree(number){
// Définissez le code du worker en tant que chaîne de caractères
const workerCode = `
  self.onmessage = function(e) {
    const data = e.data;
    
    // Code du worker ici
    const result = data * 2;
    
    // Renvoyez le résultat au thread principal
    self.postMessage(result);
  };
`;

// Créez un objet Blob à partir du code du worker
const blob = new Blob([workerCode], { type: 'application/javascript' });

// Créez un objet URL à partir du Blob
const workerURL = URL.createObjectURL(blob);

// Créez un worker à partir de l'URL de l'objet Blob
const myWorker = new Worker(workerURL);

// Écoutez le message renvoyé par le worker
myWorker.onmessage = function(e) {
  console.log('Résultat du worker :', e.data);
};

// Envoyez un message au worker
myWorker.postMessage(number);
}
tree