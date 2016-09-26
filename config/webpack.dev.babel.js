import validate from 'webpack-validator';
import merge from 'webpack-merge';

import commonConfig from './webpack.common.babel';

import {ENV} from './helpers.babel';
import * as wpBase from './webpack-parts/webpack-base.babel';
import * as wpLoaders from './webpack-parts/webpack-loaders.babel';

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
const developmentConfig = merge(
    commonConfig,
    wpBase.getOutput(ENV.dev),
    wpBase.getDevTool('source-map'),
    wpBase.getDevServer(ENV.dev),
    wpLoaders.getScss(ENV.dev),
    wpLoaders.getImages(ENV.dev),
    wpLoaders.getFonts(ENV.dev),
    wpLoaders.getMiscellaneous(ENV.dev)
);

//module.exports = validate(developmentConfig, {
//    quiet: true
//});

export default validate(developmentConfig, {
    quiet: true
});
