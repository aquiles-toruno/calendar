const PATH = require('path');
var webpack = require('webpack');

module.exports = {
    mode: "development",
    entry: './src/components/app.jsx',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    resolve: {
        modules: [
            __dirname, 'node_modules'
        ],
        alias: {
            //components
        },
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env', 'stage-0'],
            },
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/
        }, {
            test: /\.css$/,
            use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]
        }]
    }
};