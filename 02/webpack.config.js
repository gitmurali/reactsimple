var webpack = require("webpack");
var path = require("path");

module.exports={
    entry: "./src/js/index.js",
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]

    }
}