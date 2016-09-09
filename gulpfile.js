const gulp = require('gulp');
const shell = require('gulp-shell');
const argv = require('yargs').argv;
const unparse = require('unparse-args');
const awspublish = require('gulp-awspublish');
const rename = require('gulp-rename');
const path = require('path');
const moment = require('moment');
const _ = require('lodash');
var browserSync = require('browser-sync').create();

function getCommandString() {
    argv._ = '';
    return unparse(argv).command_string;
}


/**
 * Run the code on webpack-dev-server
 */

gulp.task('server:dev', shell.task([
    'webpack-dev-server --colors --config ./config/webpack.dev.js ' + getCommandString()
]));


gulp.task('server:prod', shell.task([
    'webpack-dev-server --colors --config ./config/webpack.prod.js --progress --watch ' + getCommandString()
]));

gulp.task('server', gulp.task('server:dev'));


/**
 * Build the code with webpack
 */

gulp.task('build:dev', shell.task([
    'webpack --colors --config ./config/webpack.dev.js --progress ' + getCommandString()
]));

gulp.task('build:prod', shell.task([
    'webpack --colors --config ./config/webpack.prod.js --progress ' + getCommandString()
]));

gulp.task('build', gulp.task('build:prod'));


/**
 * Run tests
 */

gulp.task('test:watch', shell.task([
    'karma start --colors ./config/karma.conf.js' + getCommandString()
]));


gulp.task('test:run', shell.task([
    'karma start --colors ./config/karma.conf.js --single-run' + getCommandString()
]));


gulp.task('test', gulp.task('test:run'));


/**
 * Linters
 */

gulp.task('sass-lint-report', function (done) {
    done();
});

gulp.task('es-lint-report', function (done) {
    done();
});


gulp.task('ts-lint-report', function (done) {
    done();
});


/**
 * Extra
 */
// Static server
gulp.task('serve:build', function () {
    browserSync.init({
        server: {
            baseDir: './build',
        }
    });
});


// gulp push:artifact --project-name myProjectName --bucket myBucket --build-number 210
var publisher;
gulp.task('push:artifact',
    gulp.series(
        (done) => {
            if (!argv.projectName) {
                return done('Project name unspecified!');
            }

            if (!argv.bucket) {
                return done('Bucket unspecified!');
            }

            if (!argv.buildNumber || !_.isFinite(argv.buildNumber)) {
                return done('Build number unspecified!');
            }

            // Specify publisher
            publisher = awspublish.create({
                region: argv.region || 'eu-central-1',
                params: {
                    Bucket: argv.bucket
                }
            });

            return done();
        },
        gulp.parallel(
            () => {
                return gulp.src('./build/assets/**/*')
                           .pipe(saveTo('assets'))
                           .pipe(publisher.publish())
                           .pipe(awspublish.reporter());
            },
            () => {
                return gulp.src(['./build/index.html', './build/*.css', './build/*.js', '!./build/*Style*.bundle.js'])
                           .pipe(saveTo(''))
                           .pipe(publisher.publish())
                           .pipe(awspublish.reporter());
            })
    ));


function saveTo(awsPath) {
    return rename(function (filePath) {
        filePath.dirname = path.join(argv.projectName, getBuildName(), awsPath, filePath.dirname);
    });
}


function getBuildName() {
    return moment().format('YYYY.MM.DD') + '-b' + argv.buildNumber;
}