/*
 * An array of automatically applied loaders.
 *
 * IMPORTANT: The loaders here are resolved relative to the resource which they are applied to.
 * This means they are not resolved relative to the configuration file.
 *
 * See: http://webpack.github.io/docs/configuration.html#module-loaders
 */
import * as helpers from '../helpers.babel';
import autoprefixer from 'autoprefixer';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const ENV = helpers.ENV;

/*
 * Webpack loader to annotate angular applications. Generates a sourcemaps as well.
 *
 * See: https://github.com/huston007/ng-annotate-loader
 */
export function getNgAnnotate() {
    return {
        module: {
            loaders: [
                {
                    test: /\.js|.ts$/,
                    loader: 'ng-annotate-loader',
                    include: [helpers.root('src')]
                    //exclude: [/\.(spec|e2e)\.(js|ts)$/]
                }
            ]
        }
    };
}

/*
 * Babel loader support for ES6/ES2015 JavaScript
 *
 * See: https://github.com/babel/babel-loader
 */
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
                    include: [helpers.root('src')]
                    //exclude: [/\.(spec|e2e)\.js$/]
                }
            ]
        }
    };
}

/*
 * Typescript loader support for .ts
 *
 * See: https://github.com/s-panferov/awesome-typescript-loader
 */
export function getAwesomeTypescript() {
    return {
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: 'awesome-typescript-loader',
                    include: [helpers.root('src')]
                    //exclude: [/\.(spec|e2e)\.ts$/]
                }
            ]
        }
    };
}

/*
 * Html loader support for *.html
 * Returns file content as string
 *
 * See: https://github.com/webpack/html-loader
 */
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

/*
 * Json loader support for *.json files.
 *
 * See: https://github.com/webpack/json-loader
 */
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


/*
 * Too hacky, maybe something better exists ?
 */
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

/*
 * Url loader for supporting images.
 *
 * See: https://github.com/webpack/url-loader
 */
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

/*
 * File loader for supporting fonts. (We could use also url-loader)
 *
 * See: https://github.com/webpack/file-loader
 */
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

/*
 * File loader for supporting any miscellaneous files.
 *
 * See: https://github.com/webpack/file-loader
 */
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
