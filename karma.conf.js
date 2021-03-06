// Karma configuration
// Generated on Tue Oct 13 2015 16:04:46 GMT-0600 (MDT)

module.exports = function(config) {
  var configObj = {

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: [ 'jasmine' ],

    // list of files / patterns to load in the browser
    // only list the specs - they import the modules under test
    files: [
      'tests/**/*.spec.js'
    ],

    // list of files to exclude
    exclude: [
    ],

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    //logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    //autoWatch: true,

    restartOnFileChange: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true
  };

  // if (process.env.TEST_MODE === 'single') {
  //   configObj.singleRun = true
  // }

  config.set(configObj);
}
