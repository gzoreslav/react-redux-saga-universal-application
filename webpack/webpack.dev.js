const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {distPath, templatePath} = require('./path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: distPath
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'The simplest webpack starter kit for React',
            template: templatePath,
        })
    ]
});
