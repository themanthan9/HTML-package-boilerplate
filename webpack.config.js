module.exports = {
	entry: "./src/assets/js/main.js",
	output: {
		path: __dirname + "/dist",
		filename: "bundle.js",
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						presets: ["@babel/preset-env"],
					},
				},
			},
		],
	},
};
