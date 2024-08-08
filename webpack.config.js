const path = require("path")
const HtmlPlugin = require("html-webpack-plugin")
const CopyPlugin = require("copy-webpack-plugin")

module.exports = {
	entry: "./main.ts",
	output: {
		filename: "[name].bundle.js",
		path: path.resolve(__dirname, "dist")
	},
	mode: "development",
	resolve: {
		extensions: [".ts", ".js", ".vue"]
	},
	module: {
		rules: [
			{
				test: /.ts$/,
				use: "ts-loader"
			},
			{
				test: /.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"]
			},
			{
				test: /.(png|jpe?g|git)$/,
				type: "asset/resource"
			}
		]
	},
	plugins: [
		new HtmlPlugin({
			template: "index.html"
		}),
		new CopyPlugin({
			patterns: [
				{
					from: "./app/assets",
					to: "assets"
				}
			]
		})
	]
}
