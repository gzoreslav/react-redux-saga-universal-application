const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const {distPath} = require('./path');

module.exports = merge(common, {
    devtool: 'inline-source-map',
    devServer: {
        contentBase: distPath,
    },
    watch: true
});
