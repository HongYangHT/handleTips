let path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'frontEnd/main.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: 'frontEnd/',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[chunkhash].js'
    },
    resolve: {
        extensions: ['.js', '.vue']
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loaders: 'vue-loader'
        }, {
            test: /\.js$/,
            loader: 'babel-loader?presets=es2015',
            exclude: /node_modules/
        }]
    }
};
