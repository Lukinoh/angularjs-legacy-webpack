import webpack from 'webpack';
import * as helpers from '../helpers.babel';

const ENV = helpers.ENV;

/*
 * The entry point for the bundle
 * Our Angular.js app
 *
 * See: http://webpack.github.io/docs/configuration.html#entry
 */
export function getEntry() {
    return {
        entry: {
            app: helpers.root('src', 'app', 'app.module.js'),
            appStyle: helpers.root('src', 'assets', 'css', 'main.scss'),
            vendor: helpers.root('src', 'app', 'vendor.module.js'),
            vendorStyle: helpers.root('src', 'assets', 'css', 'vendor.scss')
        }
    };
}

/*
 * Options affecting the resolving of modules.
 *
 * See: http://webpack.github.io/docs/configuration.html#resolve
 */
export function getResolve() {
    return {
        resolve: {
            /*
             * An array of extensions that should be used to resolve modules.
             *
             * See: http://webpack.github.io/docs/configuration.html#resolve-extensions
             */
            extensions: ['', '.ts', '.js', '.json'],

            /*
             * Make sure root is src
             */
            root: helpers.root('src'),

            // An array of directory names to be resolved to the current directory
            modulesDirectories: ['node_modules']
        }
    };
}

/*
 * Options affecting the output of the compilation.
 *
 * See: http://webpack.github.io/docs/configuration.html#output
 */
export function getOutput(env) {
    var name = '[name]';
    if (env === ENV.prod) {
        name = '[name].[chunkhash]';
    }

    return {
        output: {
            /*
             * The output directory as absolute path (required).
             *
             * See: http://webpack.github.io/docs/configuration.html#output-path
             */
            path: helpers.root('build'),

            /*
             * Specifies the name of each output file on disk.
             * IMPORTANT: You must not specify an absolute path here!
             *
             * See: http://webpack.github.io/docs/configuration.html#output-filename
             */
            filename: name + '.bundle.js',

            /*
             * The filename of the SourceMaps for the JavaScript files.
             * They are inside the output.path directory.
             *
             * See: http://webpack.github.io/docs/configuration.html#output-sourcemapfilename
             */
            sourceMapFilename: name + '.bundle.map'
        }
    };
}

/*
 * Developer tool to enhance debugging
 *
 * See: http://webpack.github.io/docs/configuration.html#devtool
 * See: https://github.com/webpack/docs/wiki/build-performance#sourcemaps
 */
export function getDevTool(type) {
    return {
        devtool: type
    };
}

/*
 * Webpack Development Server configuration
 * Description: The webpack-dev-server is a little node.js Express server.
 * The server emits information about the compilation state to the client,
 * which reacts to those events.
 *
 * See: https://webpack.github.io/docs/webpack-dev-server.html
 */
export function getDevServer(env) {
    if (env === ENV.prod) {
        return {
            devServer: {
                port: 9000,
                host: '0.0.0.0',
                hot: false,
                inline: true,
                historyApiFallback: true
            }
        };
    } else {
        return {
            devServer: {
                port: 9000,
                host: '0.0.0.0',
                hot: true,
                inline: true,
                historyApiFallback: true
            },
            plugins: [
                new webpack.HotModuleReplacementPlugin({
                    multiStep: true
                })
            ]
        };
    }
}