import validate from 'webpack-validator';
import merge from 'webpack-merge';

import * as wpBase from './webpack-parts/webpack-base.babel';
import * as wpPreLoaders from './webpack-parts/webpack-preloaders.babel';
import * as wpLoaders from './webpack-parts/webpack-loaders.babel';
import * as wpPlugins from './webpack-parts/webpack-plugins.babel';

/*
 * Webpack configuration
 *
 * See: http://webpack.github.io/docs/configuration.html#cli
 */
const commonConfig = merge({},
    wpBase.getEntry(),
    wpBase.getResolve(),
    wpPreLoaders.getEslint(),
    wpPreLoaders.getTslint(),
    wpLoaders.getJson(),
    wpLoaders.getHtml(),
    wpLoaders.getBabel(),
    wpLoaders.getAwesomeTypescript(),
    wpLoaders.getNgAnnotate(),
    wpPlugins.getSassLint(),
    wpPlugins.getForkChecker(),
    wpPlugins.getOccurenceOrder(),
    wpPlugins.getCommonsChunk(),
    wpPlugins.getHtmlWebpack(),
    wpPlugins.getCleanWebpackBuildFolder(),
    wpPlugins.getBrowserSync()
);

export default validate(commonConfig, {
    quiet: true
});