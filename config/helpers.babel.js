import path from 'path';
import yargs from 'yargs';
import unparse from 'unparse-args';

const ROOT = path.resolve(__dirname, '..');
const argv = yargs.argv;

// Determine automagically the root folder and create a path from it
export function root(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, [ROOT].concat(args));
}

export function pathConcat(args) {
    args = Array.prototype.slice.call(arguments, 0);
    return path.join.apply(path, args);
}

export function getArgsAsString() {
    argv._ = '';
    return unparse(argv).command_string;
}

export const ENV = {
    dev: 'dev',
    prod: 'prod'
};