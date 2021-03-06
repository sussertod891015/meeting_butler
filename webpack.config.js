/*
 * @Author: Sussertod
 * @Date:   2016-09-22 15:17:20
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 23:14:55
 */

'use strict';
var webpack = require('webpack');
var path = require('path');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

//路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src_0');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');
var ip = '192.168.1.103';

module.exports = {
    entry: {
        app: path.resolve(SRC_PATH, 'app.js'),
        vendor: ['react', 'react-dom']
    },
    output: {
        path: DIST_PATH + '/assets', // 输出文件的保存路径
        publicPath: 'http://' + ip + ':8080/dist/assets/',
        filename: 'app.bundle.js', // 输出文件的名称
        chunkFilename: "[name].chunk.js"
    },
    //enable dev source map
    devtool: 'eval-source-map',
    //enable dev server
    devServer: {
        historyApiFallback: true,
        host: ip,
        inline: true,
        progress: true,
        port: 4000
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            include: SRC_PATH
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader?modules&localIdentName=[path][name]---[local]---[hash:base64:5]!postcss-loader?importLoaders=1"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css?modules&localIdentName=[path][name]---[local]---[hash:base64:5]", "postcss?importLoaders=1", "sass"]
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=999999999'
        }]
    },
    postcss: function() {
        return [precss, autoprefixer];
    },
    jshint: {
        "esnext": true
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */
            "vendor",
            /* filename= */
            "vendor.bundle.js"
        ),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery"
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    }
}
