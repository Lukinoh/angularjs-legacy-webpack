// See in future if we want it
//// This file is a hack.
//const webpack = require('webpack');
//const helpers = require('./helpers');
//const validate = require('webpack-validator');
//const autoprefixer = require('autoprefixer');
//
//const merge = require('webpack-merge');
//const commonConfig = require('./webpack.common');
//
//const developmentConfig = {
//    entry : {
//        app: [helpers.root('src', 'app', 'app.module.js'), 'webpack/hot/only-dev-server'],
//        style: helpers.root('src', 'assets', 'css', 'main.scss'),
//        vendor: helpers.root('src', 'app', 'vendor.module.js'),
//        client: 'webpack-dev-server/client?http://localhost:9000'
//    },
//    output: {
//        path: helpers.root('build'),
//        filename: '[name].bundle.js',
//        sourceMapFilename: '[name].bundle.map',
//    },
//    module: {
//        loaders: [
//            {
//                test: /\.scss$/,
//                loaders: ['style-loader', 'css', 'postcss-loader', 'sass-loader']
//            }
//        ]
//    },
//    postcss: function () {
//        return [
//            autoprefixer({ browsers: ['last 2 versions'] })
//        ];
//    },
//    devtool: 'source-map',
//    devServer: {
//        // FIXME should look if I can access it from outside
//        port: 9000,
//        host: '0.0.0.0',
//        hot: true,
//        inline: false,
//        historyApiFallback: true,
//    },
//    plugins: [
//        new webpack.HotModuleReplacementPlugin({
//            multiStep: true
//        }),
//        new webpack.NoErrorsPlugin()
//    ]
//};
//
//const config = merge(
//    commonConfig,
//    developmentConfig
//);
//
//module.exports = validate(config, {
//    quiet: true
//});
