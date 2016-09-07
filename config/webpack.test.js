var validate = require('webpack-validator');
var merge = require('webpack-merge');

var wpBase = require('./webpack-parts/webpack-base');
var wpPreLoaders = require('./webpack-parts/webpack-preloaders');
var wpLoaders = require('./webpack-parts/webpack-loaders');
var wpPostLoaders = require('./webpack-parts/webpack-postloaders');
var wpPlugins = require('./webpack-parts/webpack-plugins');

var productionConfig = merge(
    {
        entry: {}
    },
    {
        output: {}
    },
    wpBase.getResolve(),
    wpBase.getDevTool('source-map'),
    wpPreLoaders.getEslint(),
    wpPreLoaders.getTslint(),
    wpLoaders.getAwesomeTypescript(),
    wpLoaders.getBabel(),
    wpLoaders.getNgAnnotate(),
    wpLoaders.getScss('dev'),
    wpLoaders.getImages('dev'),
    wpLoaders.getFonts('dev'),
    wpLoaders.getMiscellaneous('dev'),
    wpLoaders.getHtml(),
    wpLoaders.getJson(),
    wpPostLoaders.getIstanbulInstrumenter(),
    wpBase.getDevServer('dev'),
    wpPlugins.getSassLint()


    //
    //wpLoaders.getNgAnnotate(),
    //wpPlugins.getSassLint(),
    //wpPlugins.getForkChecker(),
    //wpPlugins.getOccurenceOrder(),
    //wpPlugins.getCleanWebpackBuildFolder(),
    //wpPlugins.getBrowserSync(),

);

module.exports = validate(productionConfig, {
    quiet: true
});
