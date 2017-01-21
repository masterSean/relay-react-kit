const webpack = require("webpack");
const path = require("path");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname,
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }    
        ]
    }
}
