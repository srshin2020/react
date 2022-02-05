'use strict'
const path = require('path');

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
    plugins: [],
    devServer: {
        static: './public',
        host: 'localhost',
        port: 8080,

    }

}