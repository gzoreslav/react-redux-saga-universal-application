const path = require('path');


module.exports = {
    rootPath: path.join(__dirname, '../'),
    distPath: path.join(__dirname, '../dist'),
    srcPath: path.join(__dirname, '../src'),
    stylesPath: path.join(__dirname, '../styles'),
    staticPath: path.join(__dirname, '../static'),
    templatePath:  path.join(__dirname, '../index.ejs'),
    webpackPath: path.join(__dirname),
    nodeModulePath: path.join(__dirname, '../node_modules'),
};
