import validate from 'webpack-validator';
import merge from 'webpack-merge';

import commonConfig from './webpack.common.babel';

import * as wpBase from './webpack-parts/webpack-base.babel';
import * as wpLoaders from './webpack-parts/webpack-loaders.babel';
import * as wpPlugins from './webpack-parts/webpack-plugins.babel';

const productionConfig = merge(
    commonConfig,
    wpBase.getOutput('prod'),
    wpBase.getDevTool('source-map'),
    wpBase.getDevServer('prod'),
    wpLoaders.getScss('prod'),
    wpLoaders.getImages('prod'),
    wpLoaders.getFonts('prod'),
    wpLoaders.getMiscellaneous('prod'),
    wpPlugins.getDedupe(),
    wpPlugins.getUglifyJs()
);

export default validate(productionConfig, {
    quiet: true
});
