const webpack = require('webpack');
const helpers = require('./helpers');
const validate = require('webpack-validator');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SassLintPlugin = require('sasslint-webpack-plugin');

const commonConfig = {
    entry: {
        app: helpers.root('src', 'app', 'app.module.js'),
        appStyle: helpers.root('src', 'assets', 'css', 'main.scss'),
        vendor: helpers.root('src', 'app', 'vendor.module.js'),
        vendorStyle: helpers.root('src', 'assets', 'css', 'vendor.scss')
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: helpers.root('src'),
        modulesDirectories: ['node_modules'],
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint-loader'
            },
            {
                test: /\.ts$/,
                loader: 'tslint-loader'
            }
        ],
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
    eslint: {
        configFile: helpers.root('config', 'lints', '.eslintrc.yml'),
        ignorePath: helpers.root('config', 'lints', '.eslintignore')
    },
    tslint: {
        configuration: helpers.yamlToJson(helpers.root('config', 'lints', 'tslint.yml'))
    },
    plugins: [
        new SassLintPlugin({
            configFile: helpers.root('config', 'lints', 'sass-lint.yml'),
            ignorePlugins: [
                'extract-text-webpack-plugin',
                'html-webpack-plugin for "index.html"'
            ],
            glob: 'src/**/*.scss',
            quiet: false
        }),
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
        }),
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

module.exports = validate(commonConfig, {
    quiet: true
});
