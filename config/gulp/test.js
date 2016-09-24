import gulp from 'gulp';
import shell from 'gulp-shell';
import * as helpers from '../helpers.babel';

/**
 * Run tests
 */

gulp.task('test:watch', shell.task([
    'karma start ./config/karma/karma.conf.js --colors ' + helpers.getArgsAsString()
]));


gulp.task('test:run', shell.task([
    'karma start ./config/karma/karma.conf.js --colors --single-run --fail-on-hint ' + helpers.getArgsAsString()
]));


gulp.task('test', gulp.task('test:run'));