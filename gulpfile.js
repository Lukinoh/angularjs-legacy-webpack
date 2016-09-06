const gulp = require('gulp');
const shell = require('gulp-shell');
const argv = require('yargs').argv;
const unparse = require('unparse-args');

function getCommandString() {
    argv._ = '';
    return unparse(argv).command_string;
}


var browserSync = require('browser-sync').create();
//
// Static server
gulp.task('serve:build', function() {
    browserSync.init({
        server: {
            baseDir: './build',
        }
    });
});

// Run the code on webpack-dev-server

gulp.task('server:dev', shell.task([
    'webpack-dev-server --config ./config/webpack.dev.js --progress --watch --colors ' + getCommandString()
]));

gulp.task('server:devcss', shell.task([
    'webpack-dev-server --config ./config/webpack.devcss.js --progress --watch --colors ' + getCommandString()
]));

gulp.task('server:prod', shell.task([
    'webpack-dev-server --config ./config/webpack.prod.js --progress --watch --colors ' + getCommandString()
]));

gulp.task('server', gulp.task('server:dev'));


// Build the code with webpack

gulp.task('build:dev', shell.task([
    'webpack --config ./config/webpack.dev.js --progress --colors ' + getCommandString()
]));

gulp.task('build:prod', shell.task([
    'webpack --config ./config/webpack.prod.js --progress --colors ' + getCommandString()
]));

gulp.task('build', gulp.task('build:prod'));

// TODO: Should use our build folder with browsersync simply.
gulp.task('serve:build', shell.task([
    'webpack --config ./config/webpack.dev.js --progress --colors ' + getCommandString()
]));


gulp.task('test:watch', shell.task([
    'karma start ./config/karma.conf.js --colors' + getCommandString()
]));


gulp.task('test:run', shell.task([
    'karma start ./config/karma.conf.js --single-run --colors' + getCommandString()
]));


gulp.task('test', gulp.task('test:run'));


// Don't work for the moment... Spam in console
//gulp.task('server:dev:dashboard', shell.task([
//    'webpack-dev-server --config ./config/webpack.dev.js --progress --watch'
//]));

gulp.task('sass-lint-report', function(done) {
    done();
});

gulp.task('es-lint-report', function(done) {
    done();
});


gulp.task('ts-lint-report', function(done) {
    done();
});


// or...
//
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });