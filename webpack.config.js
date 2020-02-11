const path = require("path");

module.exports = {
	mode: "development",
	entry: "./src/App.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "js/build.js",
		publicPath: "/"
	},
	module: {
		rules: [
			{
				test: /\.jsx$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				}
			}
		]
	},
	devServer: {
		contentBase: "./dist"
	}
};
