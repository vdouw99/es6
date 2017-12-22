/**
 * Created by sf on 2017/12/22 22:33:00.
 */

var webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[chunkhash:8].js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};

//# sourceMappingURL=webpack.config-compiled.js.map