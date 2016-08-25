const webpack = require('webpack');
const helpers = require('./helpers');
const validate = require('webpack-validator');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;

const common = {
    entry: {
        app: helpers.root('src', 'app', 'app.module.js'),
        style: helpers.root('src', 'assets', 'css', 'main.scss'),
        vendor: helpers.root('src', 'app', 'vendor.module.js'),
    },
    output: {
        path: helpers.root('build'),
        filename: '[name].bundle.js',
        sourceMapFilename: '[name].bundle.map',
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
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    compact: false
                },
                // exclude: [/\.(spec|e2e)\.js$/]
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader',
                // exclude: [/\.(spec|e2e)\.ts$/]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
                test: /\.scss$/,
                loaders: ['style-loader', 'css', 'postcss-loader', 'sass-loader']
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
        port: 8080,
        host: 'localhost',
        hot: true,
        inline: true,
        historyApiFallback: true,
        outputPath: helpers.root('dist/')
    },
    plugins: [
        new ForkCheckerPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest'] // name or names ?
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        new webpack.HotModuleReplacementPlugin({
            multiStep: true // Look at configuration when at work
        })
    ]
};

var config = common;

module.exports = validate(config, {
    quiet: true
});
