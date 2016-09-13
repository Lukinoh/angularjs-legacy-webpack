import gulp from 'gulp';
import shell from 'gulp-shell';
import browserSync from 'browser-sync';
import fs from 'fs';
import helpers from '../helpers';

/**
 * Run the code on webpack-dev-server
 */

gulp.task('serve:dev', shell.task([
    'webpack-dev-server --config ./config/webpack.dev.babel.js --colors --progress ' + helpers.getArgsAsString()
]));


gulp.task('serve:prod', shell.task([
    'webpack-dev-server --config ./config/webpack.prod.babel.js --colors --progress --watch ' + helpers.getArgsAsString()
]));

gulp.task('serve', gulp.task('serve:dev'));


// Run a simple serve on the original file without using webpack.
gulp.task('serve:build', done => {
    fs.stat('./build', function(err) {
        if(err == null) {
            browserSync.init({
                server: {
                    baseDir: './build',
                }
            });
        } else if(err.code == 'ENOENT') {
            done('The folder build does not exists run a build with gulp build');
        } else {
            done('Other error ' + err.code);
        }
    });
});