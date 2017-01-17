var webpack = require('webpack');

var path = require('path');
var mainPath = path.resolve(__dirname, 'src', 'js', 'index.js');
var buildPath = path.resolve(__dirname, 'dist', 'js');

var config = {
    entry: mainPath,
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            query: {
                presets: ['es2015']
            }
        }]
    }
};

module.exports = config;
