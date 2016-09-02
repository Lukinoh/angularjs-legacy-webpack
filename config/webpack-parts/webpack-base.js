const webpack = require('webpack');
const helpers = require('../helpers');

exports.getEntry = function () {
    return {
        entry: {
            app: helpers.root('src', 'app', 'app.module.js'),
            appStyle: helpers.root('src', 'assets', 'css', 'main.scss'),
            vendor: helpers.root('src', 'app', 'vendor.module.js'),
            vendorStyle: helpers.root('src', 'assets', 'css', 'vendor.scss')
        }
    };
};

exports.getResolve = function () {
    return {
        resolve: {
            extensions: ['', '.ts', '.js', '.json'],
            root: helpers.root('src'),
            modulesDirectories: ['node_modules'],
        }
    };
};

exports.getOutput = function (mode) {
    var name = '[name]';
    if (mode === 'prod') {
        name = '[name].[chunkhash]';
    }

    return {
        output: {
            path: helpers.root('build'),
            filename: name + '.bundle.js',
            sourceMapFilename: name + '.bundle.map',
        }
    };
};

exports.getDevTool = function(type) {
    return {
        devtool: type
    };
};

// Maybe add options in future
exports.getDevServer = function(mode) {
    if (mode === 'prod') {
        return {
            devServer: {
                port: 9000,
                host: '0.0.0.0',
                hot: false,
                inline: true,
                historyApiFallback: true,
            }
        };
    } else {
        return {
            devServer: {
                port: 9000,
                host: '0.0.0.0',
                hot: true,
                inline: true,
                historyApiFallback: true,
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                })
            ]
        };
    }


};