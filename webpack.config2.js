const { exec } = require('child_process');
const path = require('path');
const Knex = require('knex'); // Importez Knex sans la déstructuration

module.exports = (env, options) => {
  const { mode = 'development' } = options;

  const rules = [
    {
      test: /\.m?js$/,
      use: [
        'html-tag-js/jsx/tag-loader.js',
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      ],
    },
  ];

  const main = {
    mode,
    entry: {
      main: './src/main.js',
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
      chunkFilename: '[name].js',
    },
    module: {
      rules,
    },
    plugins: [
      {
        apply: (compiler) => {
          compiler.hooks.afterDone.tap('pack-zip', () => {
            // Exécutez votre code Knex ici
            const knex = Knex({
              client: 'sqlite3', // Choisissez votre client de base de données
              connection: {
                filename: 'chemin_vers_votre_base_de_données.sqlite', // Chemin vers votre base de données SQLite
              },
            });

            // Utilisez knex pour effectuer des opérations sur la base de données ici

            // Exemple d'utilisation :
            knex.select('*').from('table').then((rows) => {
              console.log(rows);
            });

            exec('node .vscode/pack-zip.js', (err, stdout, stderr) => {
              if (err) {
                console.error(err);
                return;
              }
              console.log(stdout);
            });
          },
        },
      },
    ],
  };

  return [main];
}