const initSqlJs = require('sql.js');

async function sqldb() {
  const SQL = await initSqlJs({
    locateFile: (file) => {
      if (file === 'sql-wasm.wasm') {
        // Fournissez le chemin local vers le fichier wasm
        return './wasm/cdnjs/sql-wasm.wasm';
      }
      return file;
    },
  });

  // Create a database
  const db = new SQL.Database();
  
  // Exécuter une requête SQL pour créer une table
  db.run("CREATE TABLE hello (a int, b char);");

  // Exécuter une requête SQL pour insérer des données
  db.run("INSERT INTO hello VALUES (0, 'hello');");
  db.run("INSERT INTO hello VALUES (1, 'world');");

  // Préparer une requête SQL avec des paramètres
  const stmt = db.prepare("SELECT * FROM hello WHERE a=:aval AND b=:bval");

  // Affecter des valeurs aux paramètres et récupérer les résultats
  const result = stmt.getAsObject({ ':aval': 1, ':bval': 'world' });
  console.log(result); // Affiche {a:1, b:'world'}

  // Finaliser la requête
  stmt.free();

  // Exécuter une requête SQL pour sélectionner toutes les lignes de la table
  const res = db.exec("SELECT * FROM hello");
  console.log(res); // Affiche [{columns:['a','b'], values:[[0,'hello'],[1,'world']]}]

  // Exporter la base de données au format Uint8Array
  const binaryArray = db.export();
}

sqldb();