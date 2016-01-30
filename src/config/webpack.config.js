var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var app_root = path.resolve(__dirname) + '/../public/es6/';

module.exports = {
    entry: {
        index : path.resolve(app_root + '/karte.js'),
        header: path.resolve(app_root, 'entrys/index.js'),
        home: path.resolve(app_root, 'entrys/home.js'),
        drawer: path.resolve(app_root, 'entrys/drawer.js'),
        common: ['react', 'react-dom', 'react-bootstrap']
    },

    output: {
        path: path.resolve(app_root, '../js/'),
        filename: '[name].js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders : [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['react', 'es2015', 'stage-0',  'stage-1']}
            },
            {
                test: /masonry|imagesloaded|fizzy\-ui\-utils|desandro\-|outlayer|get\-size|doc\-ready|eventie|eventemitter/,
                loader: 'imports?define=>false&this=>window'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin("common", "common.js"),
        new ExtractTextPlugin('[name].css'),
    ]
};