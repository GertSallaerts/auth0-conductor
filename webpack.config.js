var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: path.join(__dirname, 'node_modules'),
                loader: "babel-loader"
            }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: false },
            output: {
                'ascii_only': true
            }
        }),
        new HtmlWebpackPlugin({
            title: 'Auth0 Redirect',
            inject: 'head',
            minify: {
                collapseWhitespace: true
            }
        })
    ]
};
