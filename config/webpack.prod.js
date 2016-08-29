const webpack = require('webpack');
const helpers = require('./helpers');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack-plugin'); Try to add it in , only with ExtractTextPlugin

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const productionConfig = {
    output: {
        path: helpers.root('build'),
        filename: '[name].[chunkhash].bundle.js',
        sourceMapFilename: '[name].[chunkhash].bundle.map'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader?sourceMap", ['css-loader?sourceMap!postcss-loader', 'sass-loader?sourceMap'])
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                query: {
                    limit: 7000,
                    name: 'assets/images/[name].[hash].[ext]'
                },
                // include: helpers.root('src', 'assets', 'images')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[hash].[ext]'
            },
            {
                test: /\.*$/,
                loader: 'file-loader?name=assets/miscellaneous/[name].[hash].[ext]',
                include: helpers.root('src', 'assets', 'miscellaneous')
            }
        ]
    },
    postcss: function () {
        return [
            autoprefixer({ browsers: ['last 2 versions'] })
        ];
    },
    devtool: 'source-map',
    devServer: {
        port: 9000,
        host: '0.0.0.0',
        inline: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].[chunkhash].bundle.css')
    ]
};

const config = merge(
    commonConfig,
    productionConfig
);

module.exports = validate(config, {
    quiet: true
});
