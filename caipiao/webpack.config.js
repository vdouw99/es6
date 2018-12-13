/**
 * Created by sf on 2017/12/23 22:33:44.
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var packageObj = require('./package.json').dependencies;
var vendor = [];
for (var i in packageObj) {
    vendor.push(i);
}

module.exports = {
    entry: {
        main: './src/index.js',
        vendor: vendor
        // vendor: Object.keys(packageObj.dependencies)
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include: path.resolve(__dirname, 'src'),
                exclude: path.resolve(__dirname, 'node_modules'),       //绝对路径
                query: {presets: ['es2015']}
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader?importLoaders=1",
                    use: ["css-loader", "postcss-loader"]
                })
                // use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader?importLoaders=1",
                    use: ["css-loader", "postcss-loader", "less-loader"]
                })
                // loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                loaders: ['url-loader?limit=10000&name=assets/[name]-[hash:5].[ext]', 'img-loader']
            },
            {
                test: /\.(woff|woff2|ttf|eot)($|\?)/i,
                loader: 'url-loader?limit=5000&name=fonts/[name]-[hash:5].[ext]'
            }
        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: ()=> {
                    return [
                        require('autoprefixer')({
                            browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
                        })
                    ]
                }
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html',
            inject: 'body',
            chunks: ['vendor', 'main'],
            favicon: './static/images/favicon.ico',
            minify: {
                removeComments: true,
                collapseWhitespace: true
            }
        }),
        new ExtractTextPlugin({
            filename: "css/[name].[chunkhash:8].css"
        }),
        new OptimizeCssAssetsPlugin({
            // assetNameRegExp: /\.optimize\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorOptions: {discardComments: {removeAll: true}},
            canPrint: true
        }),
        
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, 'static/'),
                to: path.resolve(__dirname, 'dist/static/'),
                ignore: ['.*']
            }
        ]),

        // 为组件分配ID最小的ID，通过这个插件webpack可以分析和优先考虑使用最多的模块
        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.optimize.CommonsChunkPlugin('vendor')

    ]
};