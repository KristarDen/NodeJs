const path = require('path');
const HtmlWebpackPlugin= require('html-webpack-plugin');

module.exports = {
    mode : "development",
    entry: {
        main: "./src/index.js",
        analitics: './src/analitics.js'
    },
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin()
    ]
}