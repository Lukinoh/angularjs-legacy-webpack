const webpack = require('webpack');
const helpers = require('./helpers');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const PurifyCSSPlugin = require('purifycss-webpack-plugin'); Try to add it in , only with ExtractTextPlugin

const production = {
    entry: {
        app: helpers.root('src', 'app', 'app.module.js'),
        style: helpers.root('src', 'assets', 'css', 'main.scss'),
        vendor: helpers.root('src', 'app', 'vendor.module.js')
    },
    output: {
        path: helpers.root('build'),
        filename: '[name].[chunkhash].js',
        sourceMapFilename: '[name].[chunkhash].bundle.map'
    },
    resolve: {
        extensions: ['', '.ts', '.js', '.json'],
        root: helpers.root('src'),
        modulesDirectories: ['node_modules'],
    },
    // http://survivejs.com/webpack/loading-assets/loader-definitions/ Loader Evoluation Order is important
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
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract("style-loader", ['css-loader!postcss-loader', 'sass-loader'])
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
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
        // FIXME should look if I can access it from outside
        port: 9001,
        host: '0.0.0.0',
        inline: true,
        historyApiFallback: true,
    },
    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true), // What means true?
        new webpack.optimize.CommonsChunkPlugin({
           names: ['vendor', 'manifest']
        }),
        new webpack.optimize.DedupePlugin(),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new ExtractTextPlugin('[name].[chunkhash].bundle.css'),
        new CleanWebpackPlugin(['build'], {
            root: helpers.root()
        })
    ]
};

const config = production;

module.exports = validate(config, {
    quiet: true
});
