const webpack = require('webpack');
const helpers = require('../helpers');

// Plugins:
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

exports.getForkChecker = function () {
    return {
        plugins: [
            new ForkCheckerPlugin()
        ]
    };
};

exports.getOccurenceOrder = function () {
    return {
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(true)
        ]
    };
};

exports.getCommonsChunk = function () {
    return {
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'] // vendor from entry, manifest buildin
            })
        ]
    };
};

// Don't use in watch mode
exports.getDedupe = function() {
    return {
        plugins: [
            new webpack.optimize.DedupePlugin()
        ]
    };
};

exports.getHtmlWebpack = function () {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                template: helpers.root('src', 'index.html'),
                chunksSortMode: 'dependency'
            })
        ]
    };
};

// Could be more precises
exports.getCleanWebpackBuildFolder = function () {
    return {
        plugins: [
            new CleanWebpackPlugin(['build'], {
                root: helpers.root()
            }),
        ]
    };
};


// Could add options
exports.getBrowserSync = function () {
    return {
        plugins: [
            new BrowserSyncPlugin(
                // BrowserSync options
                {
                    // browse to http://localhost:3000/ during development
                    host: '0.0.0.0',
                    port: 3000,
                    // proxy the Webpack Dev Server endpoint
                    // (which should be serving on http://localhost:3100/)
                    // through BrowserSync
                    proxy: 'http://0.0.0.0:9000/',
                    open: false
                },
                // plugin options
                {
                    // prevent BrowserSync from reloading the page
                    // and let Webpack Dev Server take care of this
                    reload: false
                }
            )
        ]
    };
};

exports.getSassLint = function() {
    return {
        plugins: [
            new SassLintPlugin({
                configFile: helpers.root('config', 'lints', 'sass-lint.yml'),
                ignorePlugins: [
                    'extract-text-webpack-plugin',
                    'html-webpack-plugin for "index.html"'
                ],
                glob: helpers.pathConcat('src', '**', '*.scss'),
                quiet: false
            })
        ]
    };
};

exports.getUglifyJs = function() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    };
};