/**
 * Created by sf on 2017/8/6.
 */

var fs = require('fs');
var path = require('path');
var webpack = require('webpack');
var htmlWebpackPlugin = require('html-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    entry: [
        'webpack/hot/dev-server.js',
        'webpack-dev-server/client?http://localhost:5136',
        './src/index.js'
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].bundle.js'
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
                exclude: path.resolve(__dirname, 'node_modules'),
                query: {presets: ['es2015']}
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader?importLoaders=1', 'postcss-loader']
            },
            {
                test: /\.less$/,
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            },
            {
                test: /\.scss$/,
                loader: 'style-loader!css-loader!postcss-loader!sass-loader'
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
                postcss: function () {
                    return [
                        require('autoprefixer')({
                            browsers: ['last 10 versions', 'ie>=8', '>1% in CN']
                        })
                    ]
                }
            }
        }),

        new htmlWebpackPlugin({
            template: './index.html',
            favicon: './static/images/favicon.ico'
        }),

        // 自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:5136'
        })
    ],

    devServer: {
        // contentBase: "./public", //本地服务器所加载的页面所在的目录
        // colors: true, //终端中输出结果为彩色
        historyApiFallback: true, //不跳转
        inline: true, //实时刷新
        hot: true  // 使用热加载插件 HotModuleReplacementPlugin
    }

};
