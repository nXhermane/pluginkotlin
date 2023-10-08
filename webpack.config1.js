
const path = require('path');

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
		}
	];

	const bundle = {
		mode,
		entry: {
			main: './src/bundle.js',
		},
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: 'bundle.js',
			chunkFilename: 'bundle.js',
library: 'MyLibrary', // Nom de la bibliothèque globale
libraryTarget: 'umd', // Format de bibliothèque universel pour permettre l'utilisation dans divers environnements
		},
		module: {
			rules,
		},
		// plugins: [
		//	{
		//		apply: (compiler) => {
		//			compiler.hooks.afterDone.tap('pack-zip', () => {
		//				// run pack-zip.js
		//				exec('node .vscode/pack-zip.js', (err, stdout, stderr) => {
		//					if (err) {
		//						console.error(err);
		//						return;
		//					}
		//					console.log(stdout);
		//				});
		//			});
		//		}
		//	}
		// ],
	};

	return [bundle];
}