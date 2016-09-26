import * as helpers from '../helpers.babel';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ENV = helpers.ENV;

export function getNgAnnotate() {
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
}

export function getBabel() {
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
}


export function getAwesomeTypescript() {
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
}

export function getHtml() {
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
}

export function getJson() {
    return {
        module: {
            loaders: [
                {
                    test: /\.json$/,
                    loader: 'json-loader',
                    include: [helpers.root('src')]
                }
            ]
        }
    };
}


// More intellgent to do
export function getScss(env) {
    var configLoaderScss = {};

    if (env === ENV.prod) {
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
}

export function getImages(env, limit) {
    var name = '[name]';
    if (env === ENV.prod) {
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
}

// We could use the same trick with somesize and embedding like images
export function getFonts(env) {
    var name = '[name]';
    if (env === ENV.prod) {
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
}

export function getMiscellaneous(env) {
    var name = '[name]';
    if (env === ENV.prod) {
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
}
