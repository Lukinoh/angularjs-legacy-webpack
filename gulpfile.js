const gulp = require('gulp');
const shell = require('gulp-shell');
const helper = require('./config/helpers');

var browserSync = require('browser-sync').create();
//
// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./build",
        }
    });
});


gulp.task('server:dev', shell.task([
    'webpack-dev-server --config ./config/webpack.dev.js --progress --watch --colors'
]));

gulp.task('server:devcss', shell.task([
    'webpack-dev-server --config ./config/webpack.devcss.js --progress --watch --colors'
]));

gulp.task('server:prod', shell.task([
    'webpack-dev-server --config ./config/webpack.prod.js --progress --watch --colors'
]));

gulp.task('build:dev', shell.task([
    'webpack --config ./config/webpack.dev.js --progress --colors'
]));

gulp.task('build:prod', shell.task([
    'webpack --config ./config/webpack.prod.js --progress --colors --display-modules'
]));


// Don't work for the moment... Spam in console
gulp.task('server:dev:dashboard', shell.task([
    'webpack-dev-server --config ./config/webpack.dev.js --progress --watch'
]));



gulp.task('sass-lint-report', function(done) {
    console.log('TODO');
    done()
});

gulp.task('es-lint-report', function(done) {
    console.log('TODO');
    done()
});


gulp.task('ts-lint-report', function(done) {
    console.log('TODO');
    done()
});


// or...
//
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });