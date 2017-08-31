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
        // 'webpack/hot/dev-server.js',
        // 'webpack-dev-server/client?http://localhost:3000',
        './src/index.jsx'
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
                exclude: path.resolve(__dirname, 'node_modules'),       //绝对路径
                query: {presets: ['latest', 'react']}
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
                test: /\.tpl$/,
                loader: 'ejs-loader'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: ['url-loader?limit=80000&name=assets/[name]-[hash:5].[ext]', 'img-loader']
            },
            // { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            // { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            // { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            // { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
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
            template: './src/index.html'
        }),

        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),

        // 自动打开浏览器
        new OpenBrowserPlugin({
            url: 'http://localhost:3000'
        })
    ],

    devServer: {
        // historyApiFallback: true,    //不跳转
        hot: true,
        inline: true
    }
};
