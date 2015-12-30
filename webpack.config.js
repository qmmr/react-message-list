var path = require('path')
var webpack = require('webpack')

var srcPath = path.resolve(__dirname, 'src')

module.exports = {
	devtool: 'eval-cheap-module-source-map',
	entry: {
		main: [
			'webpack-dev-server/client?http://localhost:8080',
			'webpack/hot/only-dev-server',
			'./src/main.js'
		]
	},
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public'),
		publicPath: '/public/'
	},
	resolve: {
		extensions: [ '', '.js', '.jsx' ]
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loaders: [ 'react-hot', 'babel?cacheDirectory' ],
				include: srcPath
			},
			{ test: /\.scss$/, loader: 'style!css!sass', include: srcPath }
		]
	}
};
