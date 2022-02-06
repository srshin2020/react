'use strict'
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        main: ['./src/main.js']
    },
    output: {
        path: path.resolve(__dirname, './build'),
        filename: '[name].js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            include: path.resolve(__dirname, './src'),
            use: 'babel-loader'
        }]
    },
    devtool: 'eval-source-map',
    plugins: [
        new CopyWebpackPlugin ({
            patterns: [{
            context: './public',
            from: '*.*'
            }]
        })
    ],
    devServer: {
        static: './public',
        host: 'localhost',
        port: 8080,

    }

}