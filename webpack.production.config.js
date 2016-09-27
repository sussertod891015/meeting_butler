/*
 * @Author: Sussertod
 * @Date:   2016-09-22 15:19:03
 * @Last Modified by:   Sussertod
 * @Last Modified time: 2016-09-27 17:06:44
 */

'use strict';
var webpack = require('webpack');
var path = require('path');

//路径
var ROOT_PATH = path.resolve(__dirname);
var SRC_PATH = path.resolve(ROOT_PATH, 'src');
var DIST_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
    entry: {
        app: path.resolve(SRC_PATH, 'app.js'),
        vendor: ['react', 'react-dom']
    },
    output: {
        path: DIST_PATH + '/assets', // 输出文件的保存路径
        publicPath: './assets/',
        filename: 'app.bundle.js', // 输出文件的名称
        chunkFilename: "[name].chunk.js"
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel',
            include: SRC_PATH
        }, {
            test: /\.css$/,
            loader: "style-loader!css-loader?modules!postcss-loader?&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]"
        }, {
            test: /\.scss$/,
            loaders: ["style", "css?modules", "postcss?&importLoaders=1&localIdentName=[path][name]---[local]---[hash:base64:5]", "sass"]
        }, {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: 'url-loader?limit=999999999'
        }]
    },
    postcss: function() {
        return [precss, autoprefixer];
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(
            /* chunkName= */
            "vendor",
            /* filename= */
            "vendor.bundle.js"
        ),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx', '.scss', '.css']
    }
}
