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
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].bundle.map'
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", ['css-loader!postcss-loader', 'sass-loader'])
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
        port: 9001,
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
