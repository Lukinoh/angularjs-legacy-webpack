var path = require('path');
var fs = require("fs");
var stripBom = require("strip-bom");
var yaml = require('js-yaml');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

function isWebpackDevServer() {
    return process.argv[1] && !! (/webpack-dev-server$/.exec(process.argv[1]));
}

// Determine automagically the root folder and create a path from it
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

function pathConcat(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, args);
}

function yamlToJson(filePath) {
    return yaml.safeLoad(stripBom(fs.readFileSync(filePath, "utf8")));
}

exports.isWebpackDevServer = isWebpackDevServer;
exports.root = root;
exports.pathConcat = pathConcat;
exports.yamlToJson = yamlToJson;