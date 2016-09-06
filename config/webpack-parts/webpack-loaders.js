const helpers = require('../helpers');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.getNgAnnotate = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.js|.ts$/,
                    loader: 'ng-annotate-loader',
                    include: [helpers.root('src')],
                    //exclude: [/\.(spec|e2e)\.(js|ts)$/]
                }
            ]
        }
    };
};

exports.getBabel = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015'],
                        compact: false
                    },
                    include: [helpers.root('src')],
                    //exclude: [/\.(spec|e2e)\.js$/]
                }
            ]
        }
    };
};


exports.getAwesomeTypescript = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    include: [helpers.root('src')],
                    //exclude: [/\.(spec|e2e)\.ts$/]
                }
            ]
        }
    };
};

exports.getHtml = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.html$/,
                    loader: 'html-loader',
                    include: [helpers.root('src')]
                }
            ]
        }
    };
};

exports.getJson = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.json/,
                    loader: 'json-loader',
                    include: [helpers.root('src')]
                }
            ]
        }
    };
};


// More intellgent to do
exports.getScss = function (mode) {
    var configLoaderScss = {};

    if (mode === 'prod') {
        configLoaderScss = {};

        configLoaderScss.module = {
            loaders: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style-loader?sourceMap',
                        ['css-loader?sourceMap!postcss-loader', 'sass-loader?sourceMap']),
                    include: [helpers.root('src')]
                }
            ]
        };

        configLoaderScss.plugins = [
            new ExtractTextPlugin('[name].[chunkhash].bundle.css')
        ];
    } else {
        configLoaderScss = {
            module: {
                loaders: [
                    {
                        test: /\.scss$/,
                        loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
                        // Until this issue is not fixed, we cannot use sourceMap on Firefox and Chrome
                        // https://github.com/jtangelder/sass-loader/issues/194
                        // loaders: ['style-loader', 'css?sourceMap', 'postcss-loader', 'sass-loader?sourceMap']
                        include: [helpers.root('src')]
                    }
                ]
            }
        };
    }

    configLoaderScss.postcss = function () {
        return [
            autoprefixer({browsers: ['last 2 versions']})
        ];
    };

    return configLoaderScss;
};

exports.getImages = function (mode, limit) {
    var name = '[name]';
    if (mode === 'prod') {
        name = '[name].[hash]';
    }

    if (!limit) {
        limit = 7000;
    }

    return {
        module: {
            loaders: [
                {
                    test: /\.(jpg|png)$/,
                    loader: 'url-loader',
                    query: {
                        limit: limit,
                        // Look if I can use helpers.root here
                        name: helpers.pathConcat('assets', 'images', name + '.[ext]')
                    },
                    include: helpers.root('src', 'assets', 'images')
                }
            ]
        }
    };
};

// We could use the same trick with somesize and embedding like images
exports.getFonts = function (mode) {
    var name = '[name]';
    if (mode === 'prod') {
        name = '[name].[hash]';
    }

    return {
        module: {
            loaders: [
                {
                    test: /\.(eot|svg|ttf|woff|woff2)$/,
                    loader: 'file-loader',
                    query: {
                        name: helpers.pathConcat('assets', 'fonts', name + '.[ext]')
                    }
                }
            ]
        }
    };
};

exports.getMiscellaneous = function (mode) {
    var name = '[name]';
    if (mode === 'prod') {
        name = '[name].[hash]';
    }

    return {
        module: {
            loaders: [
                {
                    test: /\.*$/,
                    loader: 'file-loader',
                    query: {
                        name: helpers.pathConcat('assets', 'miscellaneous', name + '.[ext]')
                    },
                    include: helpers.root('src', 'assets', 'miscellaneous')
                }
            ]
        }
    };
};

exports.getIstanbulInstrumenter = function () {
    return {
        module: {
            loaders: [
                {
                    test: /\.*$/,
                    loader: 'file-loader',
                    query: {
                        name: helpers.pathConcat('assets', 'miscellaneous', name + '.[ext]')
                    },
                    include: helpers.root('src', 'assets', 'miscellaneous')
                }
            ]
        }
    }
};