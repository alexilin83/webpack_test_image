const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./src/js/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },
	devServer: {
		open: true
	},
    module: {
        rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
				generator: {
					filename: 'images/[name][ext]'
				}
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
};
