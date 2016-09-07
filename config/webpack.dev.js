var validate = require('webpack-validator');
var merge = require('webpack-merge');

var commonConfig = require('./webpack.common');

var wpBase = require('./webpack-parts/webpack-base');
var wpLoaders = require('./webpack-parts/webpack-loaders');

var developmentConfig = merge(
    commonConfig,
    wpBase.getOutput('prod'),
    wpBase.getDevTool('source-map'),
    wpBase.getDevServer('dev'),
    wpLoaders.getScss('dev'),
    wpLoaders.getImages('dev'),
    wpLoaders.getFonts('dev'),
    wpLoaders.getMiscellaneous('dev')
);

module.exports = validate(developmentConfig, {
    quiet: true
});
