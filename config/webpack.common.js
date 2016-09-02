const validate = require('webpack-validator');
const merge = require('webpack-merge');

const wpBase = require('./webpack-parts/webpack-base');
const wpPreLoaders = require('./webpack-parts/webpack-preloaders');
const wpLoaders = require('./webpack-parts/webpack-loaders');
const wpPlugins = require('./webpack-parts/webpack-plugins');

var commonConfig = merge({},
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

module.exports = validate(commonConfig, {
    quiet: true
});
