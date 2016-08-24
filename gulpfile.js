const gulp = require('gulp');
const shell = require('gulp-shell');


// var browserSync = require('browser-sync').create();
//
// Static server
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./src",
//             routes: {
//                 "/node_modules": "node_modules"
//             }
//         }
//     });
// });


gulp.task('server:dev', shell.task([
    'webpack-dev-server --config ./webpack.config.js --progress --watch'
]));


// Don't work for the moment... Spam in console
gulp.task('server:dev:dashboard', shell.task([
    'webpack-dev-server --config ./webpack.config.js --progress --watch'
]));


gulp.task('server:prod', function() {

});


gulp.task('build', function() {

});

// or...
//
// gulp.task('browser-sync', function() {
//     browserSync.init({
//         proxy: "yourlocal.dev"
//     });
// });