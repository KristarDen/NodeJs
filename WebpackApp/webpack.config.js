const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src') ,
    mode: 'development',
    devServer: {
        port: 9000
    },
    entry: {
        main: './index.js',
        analitics: './analitcs.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Test weppack',
            template: './index.html'
        }),
        new CopyPlugin(
            {
                patterns: [
                    {
                        from: path.resolve(__dirname, "src/favicon.ico"),
                        to: path.resolve(__dirname, "dist")
                    },
                ]
            }
        )
    ],
    module:{
        rules : [
            {
                test: /\.css$/i,
                use :['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                loader: 'file-loader',
                options:{
                    name: '[name].[ext]',
                    outpuntPath: 'images'
                }

            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options:{
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
    
}