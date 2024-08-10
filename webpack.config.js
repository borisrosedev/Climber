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
        extensions: [".mts", ".ts", ".js", ".vue"]
	},
	module: {
		rules: [
            {
                test: /\.html$/,
                use: 'raw-loader',
                exclude: /node_modules/
            },
			{
				test: /.ts$/,
				use: "ts-loader",
                exclude: /node_modules/

			},
			{
				test: /.s[ac]ss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
                exclude: /node_modules/

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
