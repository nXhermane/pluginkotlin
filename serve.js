const http = require('http');
const fs = require('fs');
const path = require('path');

const port = 3000; // Port d'écoute du serveur
const dossierExpose = path.join(__dirname, '/'); // Spécifiez le chemin absolu du répertoire que vous souhaitez exposer

// Créer un serveur HTTP
const server = http.createServer((req, res) => {
  // Vérifier si la requête correspond à la racine du serveur
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Bienvenue sur le serveur de fichiers !'); // Vous pouvez personnaliser la réponse ici
  } else {
    // Obtenir le chemin absolu du fichier demandé
    const fichierDemande = path.join(dossierExpose, req.url);

    // Vérifier si le fichier existe
    fs.access(fichierDemande, fs.constants.F_OK, (err) => {
      if (err) {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Fichier non trouvé');
      } else {
        // Lire le contenu du fichier et le renvoyer
        fs.readFile(fichierDemande, (err, data) => {
          if (err) {
            res.statusCode = 500;
            res.setHeader('Content-Type', 'text/plain');
            res.end('Erreur interne du serveur');
          } else {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
          }
        });
      }
    });
  }
});

// Démarrer le serveur
server.listen(port, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${port}`);
});
