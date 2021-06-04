const path = require('path');
const webpack = require('webpack');
const ESLintPlugin = require('eslint-webpack-plugin');


const config = {
	entry: {
		index: './client/src/index.js'
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				}
			},
			{
				test: /\.css$/i,
				use: [
					{ loader: 'style-loader' },
					{
						loader: 'css-loader',
						options: {
							modules: true
						}
					}
				]
			}
		]
	},
	plugins: [
		new ESLintPlugin({
			extensions: ['js', 'jsx']
		})
	],
	output: {
		path: path.resolve(__dirname, './client/dist'),
		filename: 'app.bundle.js'
	}
}

module.exports = (env, argv) => {
	if (argv.mode === 'production')
		config['mode'] = 'production'

	else 
		config['mode'] = 'development'

	return config
}