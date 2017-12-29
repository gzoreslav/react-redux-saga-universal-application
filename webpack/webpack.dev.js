const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {distPath, templatePath} = require('./path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: distPath,
        historyApiFallback: true
    },
    output: {
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'React redux-saga universal application',
            template: templatePath,
        })
    ]
});
