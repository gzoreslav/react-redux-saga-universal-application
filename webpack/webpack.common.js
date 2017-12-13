const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const {distPath, srcPath, nodeModulePath, staticPath} = require("./path");

module.exports = {
    context: srcPath,
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './client.js',
    ],
    output: {
        path: distPath,
        filename: 'client.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ],
    },
    resolve: {
        modules: [
            nodeModulePath
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {from: staticPath}
        ]),
        new ExtractTextPlugin('main.css')
    ]
};