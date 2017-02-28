var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = [
	new HTMLWebpackPlugin({
		inject: 'body',
		template: __dirname + '/app/index.html',
		output: 'index.html'
	}),
	new HTMLWebpackPlugin({
		inject: 'body',
		template: __dirname + '/app/examples/materials/materials.html',
		output: 'examples/materials/materials.html'
	})
]

module.exports = HTMLWebpackPluginConfig;
