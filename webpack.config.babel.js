const {resolve} = require('path');
const {getIfUtils} = require ('webpack-config-utils')

module.exports = env => {
	const {ifProd} = getIfUtils(env)
	return {
		context: resolve('src'),
		entry:'./bootstrap.js',
		output: {
			path: resolve('dist'),
			filename: 'bundle.js',
			publicPath: '/dist/',
		},
		// devtool: env.prod ? 'source-map':'eval',
		devtool: ifProd('source-map', 'eval'),
		module: {
			loaders:[
				{test:/\.js$/, loaders: ['babel-loader'], exclude: /node_modules/},
				{test: /\.css$/, loaders: ['style-loader', 'css-loader']},
			],
		}
	}

}

