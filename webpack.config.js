var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = require('./htmlWebpackPluginConfig');
// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
// 	inject: 'body',
// 	template: __dirname + "/app/index.html",
// 	output: 'index.html'
// });

module.exports = {
	// entry: {
	// 	'index': ['./app/index.js', './app/main.scss'],
	// 	'materials': ['./app/examples/materials/materials.js', './app/examples/materials/materials.scss']
	// },
	entry: [
		'./app/index.js', './app/main.scss'
	],
	output: {
		path: `${__dirname}/dist`,
		filename: '[name].js'
	},
	module: {
			rules: [
					{
							test: /\.scss$/,
							use: ['style-loader', 'css-loader', 'sass-loader'],
					}
			]
	},
	plugins: HTMLWebpackPluginConfig
};
