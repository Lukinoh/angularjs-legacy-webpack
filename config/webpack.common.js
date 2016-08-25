const webpack = require('webpack');
const helpers = require('./helpers');
const validate = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');

const commonConfig = {
    entry: {
        app: helpers.root('src', 'app', 'app.module.js'),
        style: helpers.root('src', 'assets', 'css', 'main.scss'),
        vendor: helpers.root('src', 'app', 'vendor.module.js')
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: helpers.root('src'),
        modulesDirectories: ['node_modules'],
    },
    module: {
        loaders: [
            {
                test: /\.js|.ts$/,
                loader: 'ng-annotate-loader',
                exclude: [/\.(spec|e2e)\.(js|ts)$/]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    compact: false
                },
                exclude: [/\.(spec|e2e)\.js$/]
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            }
        ]
    },
    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        new CleanWebpackPlugin(['build'], {
            root: helpers.root()
        })
    ]
};

module.exports = validate(commonConfig, {
    quiet: true
});
