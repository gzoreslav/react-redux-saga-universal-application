const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const fs = require('fs');
const {distPath, srcPath} = require('./path');

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    context: srcPath,
    target: 'node',
    entry: [
        'babel-polyfill',
        'whatwg-fetch',
        './server.js'
    ],
    output: {
        path: distPath,
        filename: 'server.bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            }
        ],
    },
    plugins: [
        new UglifyJSPlugin()
    ],
    externals: nodeModules
};