const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const webpack = require('webpack');

module.exports = {
	devtool:'cheap-module-eval-source-map',
    entry: path.resolve(__dirname, 'frontEnd/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'build/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true,
        progress: true,
        colors: true,
        port: 8000 //端口你可以自定义
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loaders: 'vue-loader',
            exclude: /node_modules/
        }, {
            test: /\.js$/,
            loader: 'babel-loader?presets=es2015',
            exclude: /node_modules/
        }, {
            test: /\.scss$/,
            loaders: 'sass-loader',
            exclude: /node_modules/
        }]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: path.resolve(__dirname, 'index.html'),
            template: path.resolve(__dirname, 'frontEnd/index.html'),
            inject: true,
            hash: true
        }),
        new ExtractTextPlugin('[name].css'),
        //开启热加载模式
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
