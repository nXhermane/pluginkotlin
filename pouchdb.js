// const PouchDB = require('pouchdb'); // Pour Node.js, utilisez "require"
// const myDatabase = new PouchDB('nom_de_votre_base_de_donnees');
// const document = {
//  _id: 'mondoci',
//  title: 'Mon titre',
//  //content: 'Contenu de mon document'
// };

// myDatabase.put(document)
//  .then(result => {
//     console.log('Document ajouté avec succès :', result);
//  })
//  .catch(err => {
//     console.error('Erreur lors de l\'ajout du document :', err);
//  });

// const fs = require('fs');


// // Chargez le fichier SQL.js
// const SQL = require('sql.js');

// // Créez une instance SQLite en utilisant SQL.js
// const db = new SQL.Database();

// // Lisez un fichier SQLite depuis le disque
// const fileBuffer = fs.readFileSync('auto_complt.db');
// const data = new Uint8Array(fileBuffer);
// db.init(data);

// // Vous pouvez maintenant exécuter des requêtes SQL sur votre base de données
// const result = db.exec('SELECT * FROM kotlin_native');
// console.log(result);

const sqlite3 = require('sqlite3').verbose();

// Créez une base de données en mémoire
export  const db = new sqlite3.Database('.auto_complt.db');

// Exécutez des requêtes SQL
db.serialize(() => {
  db.run("CREATE TABLE users (id INT, name TEXT)");

  const stmt = db.prepare("INSERT INTO users VALUES (?, ?)");
  stmt.run(1, 'John');
  stmt.finalize();

  db.each("SELECT id, name FROM users", (err, row) => {
    console.log(`${row.id}: ${row.name}`);
  });
});

db.close();