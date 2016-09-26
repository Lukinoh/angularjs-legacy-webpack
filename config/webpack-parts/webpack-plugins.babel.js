/*
 * Add additional plugins to the compiler.
 *
 * See: http://webpack.github.io/docs/configuration.html#plugins
 */
import webpack from 'webpack';
import * as helpers from '../helpers.babel';
import atl from 'awesome-typescript-loader';

// Plugins:
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import SassLintPlugin from 'sasslint-webpack-plugin';
const ForkCheckerPlugin = atl.ForkCheckerPlugin;

/*
 * Plugin: ForkCheckerPlugin
 * Description: Do type checking in a separate process, so webpack don't need to wait.
 *
 * See: https://github.com/s-panferov/awesome-typescript-loader#forkchecker-boolean-defaultfalse
 */
export function getForkChecker() {
    return {
        plugins: [
            new ForkCheckerPlugin()
        ]
    };
}

/*
 * Plugin: OccurenceOrderPlugin
 * Description: Assign the module and chunk ids by occurrence count.
 * Ids that are used often get lower (shorter) ids. This make ids predictable, reduces total file size and is recommended.
 *
 * See: https://webpack.github.io/docs/list-of-plugins.html#occurrenceorderplugin
 * See: https://github.com/webpack/docs/wiki/optimization#minimize
 */
export function getOccurenceOrder() {
    return {
        plugins: [
            new webpack.optimize.OccurenceOrderPlugin(true)
        ]
    };
}

/*
 * Plugin: CommonsChunkPlugin
 * Description: Shares common code between the pages.
 * It identifies common modules and put them into a commons chunk.
 *
 * See: https://webpack.github.io/docs/list-of-plugins.html#commonschunkplugin
 * See: https://github.com/webpack/docs/wiki/optimization#multi-page-app
 */
export function getCommonsChunk() {
    return {
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                names: ['vendor', 'manifest'] // vendor from entry, manifest buildin
            })
        ]
    };
}

/*
 * Plugin: DedupePlugin
 * Description: Search for equal or similar files and deduplicate them in the output.
 * This prevents the inclusion of duplicate code into your bundle and instead applies a copy of the function at runtime.
 * It doesn't affect semantics.
 *
 * DO NOT USE IN WATCH MODE
 *
 * See: https://webpack.github.io/docs/list-of-plugins.html#dedupeplugin
 * See: https://github.com/webpack/docs/wiki/optimization#deduplication
 */
export function getDedupe() {
    return {
        plugins: [
            new webpack.optimize.DedupePlugin()
        ]
    };
}

/*
 * Plugin: HtmlWebpackPlugin
 * Description: Simplifies creation of HTML files to serve your webpack bundles.
 * This is especially useful for webpack bundles that include a hash in the filename
 * which changes every compilation.
 *
 * See: https://github.com/ampedandwired/html-webpack-plugin
 */
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

/*
 * Plugin: CleanWebpackPlugin
 * Description: A webpack plugin to remove/clean your build folder(s) before building
 *
 * See: https://github.com/johnagan/clean-webpack-plugin
 */
export function getCleanWebpackBuildFolder() {
    return {
        plugins: [
            new CleanWebpackPlugin(['build'], {
                root: helpers.root()
            })
        ]
    };
}

/*
 * Plugin: BrowserSyncPlugin
 * Description: Easily use BrowserSync in your Webpack project.
 *
 * See: https://github.com/Va1/browser-sync-webpack-plugin
 */
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

/*
 * Plugin: SassLintPlugin
 * Description: Sasslint plugin for Webpack.
 *
 * See: https://github.com/alleyinteractive/sasslint-webpack-plugin
 */
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

/*
 * Plugin: UglifyJsPlugin
 * Description: Minimize all JavaScript output of chunks.
 * Loaders are switched into minimizing mode.
 *
 * See: https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
 */
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