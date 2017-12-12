const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './client.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
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
            path.join(__dirname, 'node_modules')
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new CopyWebpackPlugin([
            {from: '../static'}
        ]),
        new ExtractTextPlugin('main.css')
    ]
};