import webpack from 'webpack';
import helpers from '../helpers';
import atl from 'awesome-typescript-loader';

// Plugins:
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import SassLintPlugin from 'sasslint-webpack-plugin';
const ForkCheckerPlugin = atl.ForkCheckerPlugin;

export function getForkChecker() {
    return {
        plugins: [
            new ForkCheckerPlugin()
        ]
    };
}

export function getOccurenceOrder() {
    return {
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(true)
        ]
    };
}

export function getCommonsChunk() {
    return {
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'] // vendor from entry, manifest buildin
            })
        ]
    };
}

// Don't use in watch mode
export function getDedupe() {
    return {
        plugins: [
            new webpack.optimize.DedupePlugin()
        ]
    };
}

export function getHtmlWebpack() {
    return {
        plugins: [
            new HtmlWebpackPlugin({
                template: helpers.root('src', 'index.html'),
                chunksSortMode: 'dependency'
            })
        ]
    };
}

// Could be more precises
export function getCleanWebpackBuildFolder() {
    return {
        plugins: [
            new CleanWebpackPlugin(['build'], {
                root: helpers.root()
            }),
        ]
    };
}


// Could add options
export function getBrowserSync() {
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
}

export function getSassLint(failOnHint = false) {
    return {
        plugins: [
            new SassLintPlugin({
                configFile: helpers.root('config', 'lints', 'sass-lint.yml'),
                ignorePlugins: [
                    'extract-text-webpack-plugin',
                    'html-webpack-plugin for "index.html"'
                ],
                glob: helpers.pathConcat('src', '**', '*.scss'),
                quiet: false,
                failOnWarning: failOnHint,
                failOnError: failOnHint
            })
        ]
    };
}

export function getUglifyJs() {
    return {
        plugins: [
            new webpack.optimize.UglifyJsPlugin({
                compress: {
                    warnings: false
                }
            })
        ]
    };
}