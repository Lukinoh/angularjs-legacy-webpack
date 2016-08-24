const webpack = require('webpack');
const path = require('path');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ForkCheckerPlugin = require('awesome-typescript-loader').ForkCheckerPlugin;
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');


const PATHS = {
    src: path.join(__dirname, 'src'),
    app: path.join(__dirname, 'src', 'app'),
    style: path.join(__dirname, 'src', 'assets', 'css'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        app: path.join(PATHS.app, 'app.module.js'),
        style: path.join(PATHS.style, 'main.scss'),
        vendor: ['angular', 'angular-route', 'toastr', 'lodash']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
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
                }
            },
            {
                test: /\.ts$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
            },
            {
               test: /\.scss$/,
               loaders: ['style-loader', 'css', 'postcss-loader', 'sass-loader']
            }
            // { Use this only in production
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract("style-loader", ['css-loader!postcss-loader', 'sass-loader'])
            // }
        ]
    },
    postcss: function () {
        return [autoprefixer];
    },
    devtool: 'source-map',
    devServer: {
        // Enable history API fallback so HTML5 History API based
        // routing works. This is a good default that will come
        // in handy in more complicated setups.
        historyApiFallback: true,

        // Unlike the cli flag, this doesn't set
        // HotModuleReplacementPlugin!
        hot: true,
        inline: true,

        // Display only errors to reduce the amount of output.
        stats: 'errors-only',

        // Parse host and port from env to allow customization.
        //
        // If you use Vagrant or Cloud9, set
        // host: options.host || '0.0.0.0';
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        // host: 'localhost', // Defaults to `localhost`
        // port: 8080 // Defaults to 8080
    },
    plugins: [
        // Enable multi-pass compilation for enhanced performance
        // in larger projects. Good default.
        new webpack.HotModuleReplacementPlugin({
            multiStep: true // Look at configuration when at work
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        }),
        new CleanWebpackPlugin([PATHS.build], {
            // Without `root` CleanWebpackPlugin won't point to our
            // project and will fail to work.
            root: process.cwd()
        }),
        // new webpack.optimize.UglifyJsPlugin({ // Don't use this in dev mode because it will slow down building
        //     compress: {
        //         warnings: false
        //     }
        // }),
        new ForkCheckerPlugin(),
        // Output extracted CSS to a file
        // new ExtractTextPlugin('[name].css') // Break HMR useit only in prod
    ]
};

var config = common;

module.exports = validate(config, {
    quiet: true
});
