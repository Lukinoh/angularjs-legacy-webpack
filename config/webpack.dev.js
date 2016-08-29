const webpack = require('webpack');
const helpers = require('./helpers');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const developmentConfig = {
    output: {
        path: helpers.root('build'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map',
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
                // Until this issue is not fixed, we cannot use sourceMap on Firefox and Chrome
                // https://github.com/jtangelder/sass-loader/issues/194
                // loaders: ['style-loader', 'css?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
            },
            {
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                query: {
                    limit: 7000,
                    name: 'assets/images/[name].[ext]'
                },
                // include: helpers.root('src', 'assets', 'images')
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file-loader?name=assets/fonts/[name].[ext]'
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
        hot: true,
        inline: true,
        historyApiFallback: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin({
            multiStep: true
        })
    ]
};

const config = merge(
    commonConfig,
    developmentConfig
);

module.exports = validate(config, {
    quiet: true
});
