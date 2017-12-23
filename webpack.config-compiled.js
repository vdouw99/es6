/**
 * Created by sf on 2017/12/22 22:33:00.
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

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
    },
    plugins: [new webpack.LoaderOptionsPlugin({
        options: {
            postcss: () => {
                return [require('autoprefixer')({
                    browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
                })];
            }
        }
    }), new webpack.DefinePlugin({
        'process.env': {
            'NODE_ENV': JSON.stringify('production')
        }
    }), new htmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html',
        inject: 'body',
        chunks: ['vendor', 'main'],
        //favicon:'./src/static/images/favicon.ico',
        minify: {
            removeComments: true,
            collapseWhitespace: true
        }
    }), new ExtractTextPlugin({
        filename: "css/[name].[chunkhash:8].css"
    }), new OptimizeCssAssetsPlugin({
        // assetNameRegExp: /\.optimize\.css$/g,
        cssProcessor: require('cssnano'),
        cssProcessorOptions: { discardComments: { removeAll: true } },
        canPrint: true
    }), new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        minimize: true,
        compress: { warnings: false },
        output: { comments: false },
        minChunks: Infinity
    }),

    // 为组件分配ID最小的ID，通过这个插件webpack可以分析和优先考虑使用最多的模块
    new webpack.optimize.OccurrenceOrderPlugin(), new webpack.optimize.CommonsChunkPlugin('vendor')]
};

//# sourceMappingURL=webpack.config-compiled.js.map