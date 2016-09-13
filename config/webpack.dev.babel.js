import validate from 'webpack-validator';
import merge from 'webpack-merge';

import commonConfig from './webpack.common.babel';

import * as wpBase from './webpack-parts/webpack-base.babel';
import * as wpLoaders from './webpack-parts/webpack-loaders.babel';

const developmentConfig = merge(
    commonConfig,
    wpBase.getOutput('dev'),
    wpBase.getDevTool('source-map'),
    wpBase.getDevServer('dev'),
    wpLoaders.getScss('dev'),
    wpLoaders.getImages('dev'),
    wpLoaders.getFonts('dev'),
    wpLoaders.getMiscellaneous('dev')
);

//module.exports = validate(developmentConfig, {
//    quiet: true
//});

export default validate(developmentConfig, {
    quiet: true
});
