const HTMLWebpackPlugin = require('html-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	entry: {
		'index': [
			'./app/index.js', './app/main.scss'
		],
		'materials': ['./app/examples/materials/materials.js', './app/examples/materials/materials.scss']
	},
	output: {
		path: `${__dirname}/dist`,
		filename: 'js/[name].js'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}, {
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader']
			}, {
				test: /\.jpe?g$|\.gif$|\.png$/i,
				loader: 'file-loader?regExp=(image.*)&name=[1]'
			}
		]
	},
	plugins: [
		new ProgressBarPlugin(),
		new CopyWebpackPlugin([
			{ from: './app/assets', to: 'assets/' }
		]),
		new HTMLWebpackPlugin({
			inject: 'body',
			template: `${__dirname}/app/index.html`,
			filename: 'index.html',
			chunks: ['index']
		}),
		new HTMLWebpackPlugin({
			inject: 'body',
			template: `${__dirname}/app/examples/materials/materials.html`,
			filename: 'examples/materials/index.html',
			chunks: ['materials']
		})
	]
};
