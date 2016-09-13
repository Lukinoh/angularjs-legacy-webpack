var validate = require('webpack-validator');
var merge = require('webpack-merge');
var webpack = require('webpack');

var wpBase = require('./webpack-parts/webpack-base');
var wpPreLoaders = require('./webpack-parts/webpack-preloaders');
var wpLoaders = require('./webpack-parts/webpack-loaders');
var wpPostLoaders = require('./webpack-parts/webpack-postloaders');
var wpPlugins = require('./webpack-parts/webpack-plugins');

function getProductionConfig(failOnHint) {
    // TODO fix me, write it better
    var failOnHintDef = failOnHint || false;

    return merge(
        {
            entry: {}
        },
        {
            output: {}
        },
        wpBase.getResolve(),
        wpBase.getDevTool('source-map'),
        wpPreLoaders.getEslint(failOnHintDef),
        wpPreLoaders.getTslint(failOnHintDef),
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
        wpPlugins.getSassLint(failOnHintDef)
    );
}

module.exports = function(failOnHint) {
    return validate(getProductionConfig(failOnHint), {
        quiet: true
    });
};