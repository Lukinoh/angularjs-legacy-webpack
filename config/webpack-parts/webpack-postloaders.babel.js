import helpers from '../helpers';

export function getIstanbulInstrumenter() {
    return {
        module: {
            postLoaders: [

                /**
                 * Instruments JS files with Istanbul for subsequent code coverage reporting.
                 * Instrument only testing sources.
                 *
                 * See: https://github.com/deepsweet/istanbul-instrumenter-loader
                 */
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