var path = require('path');

// Helper functions
var ROOT = path.resolve(__dirname, '..');

var yargs = require('yargs');
var unparse = require('unparse-args');

var argv = yargs.argv;



// Determine automagically the root folder and create a path from it
function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

function pathConcat(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, args);
}

function getArgsAsString() {
    argv._ = '';
    return unparse(argv).command_string;
}


exports.root = root;
exports.pathConcat = pathConcat;
exports.getArgsAsString = getArgsAsString;
