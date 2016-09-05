// Karma configuration
// Generated on Mon Sep 05 2016 10:44:40 GMT+0200 (CEST)
var helpers = require('./config/helpers');

module.exports = function karmaConfig (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/**/*.spec.js'
        ],
        //files: [
        //    './tests.webpack.js'
        //],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/**/*.js': ['coverage', 'webpack', 'sourcemap'],
        },
        //preprocessors: {
        //    './tests.webpack.js': ['coverage', 'webpack', 'sourcemap']
        //},

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha', 'coverage'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        coverageReporter: {
            dir : '/reports/coverage/',
            reporters: [
                { type: 'text-summary' },
                { type: 'json' },
                { type: 'html' }
            ]
        },

        webpack: require('./config/webpack.test.js'),

        webpackMiddleware: {
            noInfo: true
        }
    });
};
