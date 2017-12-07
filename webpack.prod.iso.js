const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const fs = require('fs');

let nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    context: path.join(__dirname, 'src'),
    target: 'node',
    entry: [
        'whatwg-fetch',
        './server.js'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
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