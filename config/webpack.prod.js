var validate = require('webpack-validator');
var merge = require('webpack-merge');

var commonConfig = require('./webpack.common');

var wpBase = require('./webpack-parts/webpack-base');
var wpLoaders = require('./webpack-parts/webpack-loaders');
var wpPlugins = require('./webpack-parts/webpack-plugins');

var productionConfig = merge(
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

module.exports = validate(productionConfig, {
    quiet: true
});
