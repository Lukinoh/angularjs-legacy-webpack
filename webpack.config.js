const webpack = require('webpack');
const path = require('path');
const validate = require('webpack-validator');
const HtmlWebpackPlugin = require('html-webpack-plugin');


const PATHS = {
    app: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: {
        app: path.join(PATHS.app, 'app', 'app.module.js'),
        vendor: ['angular', 'angular-route', 'toastr', 'lodash']
    },
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015'],
                    compact: false
                }
            }
        ]
    },
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
            multiStep: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            chunksSortMode: 'dependency'
        })
    ]
};

var config = common;

module.exports = validate(config, {
    quiet: true
});
