import gulp from 'gulp';
import shell from 'gulp-shell';
import helpers from '../helpers';

/**
 * Run tests
 */

gulp.task('test:watch', shell.task([
    'karma start ./config/karma.conf.js --colors ' + helpers.getArgsAsString()
]));


gulp.task('test:run', shell.task([
    'karma start ./config/karma.conf.js --colors --single-run --fail-on-hint ' + helpers.getArgsAsString()
]));


gulp.task('test', gulp.task('test:run'));