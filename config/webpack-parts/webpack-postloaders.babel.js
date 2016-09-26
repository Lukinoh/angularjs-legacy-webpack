/*
 * An array of applied pre and post loaders.
 *
 * See: http://webpack.github.io/docs/configuration.html#module-preloaders-module-postloaders
 */
import * as helpers from '../helpers.babel';

/*
 * Instruments JS files with Istanbul for subsequent code coverage reporting.
 * Instrument only testing sources.
 *
 * See: https://github.com/deepsweet/istanbul-instrumenter-loader
 */
export function getIstanbulInstrumenter() {
    return {
        module: {
            postLoaders: [
                {
                    test: /\.(js|ts)$/,
                    loader: 'istanbul-instrumenter-loader',
                    include: helpers.root('src'),
                    exclude: [/\.(spec|e2e|route|module|config|constant|run)\.(js|ts)$/]
                }
            ]
        }
    };
}