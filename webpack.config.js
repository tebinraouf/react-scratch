const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require("dotenv").config();

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: ['whatwg-fetch', './index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './bundle.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader"
            }, 
            {
                test: /\.(jpeg|png|gif|jpg)$/,
                loader: "file-loader"
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development'
                        }
                    },
                    'css-loader',
                ]
                
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        }),
        new webpack.DefinePlugin({
            API_URL: JSON.stringify(process.env.API_URL)
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
}

