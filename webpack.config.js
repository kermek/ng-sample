var path = require("path");
var HtmlPlugin = require("html-webpack-plugin");
module.exports = {
	entry: {
		app: [
			'webpack/hot/dev-server',
			"./app/app.js"
		]
	},
	output: {
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
		filename: "bundle.js"
	},
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel" }
		]
	},
	plugins: [
		new HtmlPlugin({
			filename: 'index.html',
			template: __dirname + '/index.html'
		})
	]
};