import gulp from 'gulp';
import shell from 'gulp-shell';
import helpers from '../helpers';

/**
 * Build the code with webpack
 */

gulp.task('build:dev', shell.task([
    'webpack --config ./config/webpack.dev.babel.js --colors --progress ' + helpers.getArgsAsString()
]));

gulp.task('build:prod', shell.task([
    'webpack --config ./config/webpack.prod.babel.js --colors --progress ' + helpers.getArgsAsString()
]));

gulp.task('build', gulp.task('build:prod'));