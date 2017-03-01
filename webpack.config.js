var HTMLWebpackPlugin = require('html-webpack-plugin');
// var HTMLWebpackPluginConfig = require('./htmlWebpackPluginConfig');
// var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
// 	inject: 'body',
// 	template: __dirname + "/app/index.html",
// 	output: 'index.html'
// });

module.exports = {
	entry: {
		'index': ['./app/index.js', './app/main.scss'],
		'materials': ['./app/examples/materials/materials.js', './app/examples/materials/materials.scss']
	},
	output: {
		path: `${__dirname}/dist`,
		filename: 'js/[name].js'
	},
	module: {
			rules: [
					{
							test: /\.scss$/,
							use: ['style-loader', 'css-loader', 'sass-loader'],
					}
			]
	},
	plugins: [
		new HTMLWebpackPlugin({
			inject: 'body',
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			chunks: ['index']
		}),
		new HTMLWebpackPlugin({
			inject: 'body',
			template: __dirname + '/app/examples/materials/materials.html',
			filename: 'examples/materials/index.html',
			chunks: ['materials']
		})
	]
};
