import validate from 'webpack-validator';
import merge from 'webpack-merge';

import commonConfig from './webpack.common.babel';

import {ENV} from './helpers.babel';
import * as wpBase from './webpack-parts/webpack-base.babel';
import * as wpLoaders from './webpack-parts/webpack-loaders.babel';
import * as wpPlugins from './webpack-parts/webpack-plugins.babel';

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
const productionConfig = merge(
    commonConfig,
    wpBase.getOutput(ENV.prod),
    wpBase.getDevTool('source-map'),
    wpBase.getDevServer(ENV.prod),
    wpLoaders.getScss(ENV.prod),
    wpLoaders.getImages(ENV.prod),
    wpLoaders.getFonts(ENV.prod),
    wpLoaders.getMiscellaneous(ENV.prod),
    wpPlugins.getDedupe(),
    wpPlugins.getUglifyJs()
);

export default validate(productionConfig, {
    quiet: true
});
