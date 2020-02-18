const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const path = require("path");

const app = express();
const config = require("../webpack.config.js");
const compiler = webpack(config);

app.use(
	webpackDevMiddleware(compiler, {
		publicPath: config.output.publicPath
	})
);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "../dist", "index.html"));
});

app.listen(3000, function() {
	console.log("Base React App running on 3000");
});
