module.exports = function(config) {
var srcFile = 'src/herehere.js',
    testFile = 'test/herehere.test.js';

    config.set({
        files: [
            'src/herehere.js',
            'test/herehere.test.js'
        ],
        preprocessors: {
            'src/herehere.js'       : [ 'browserify', 'coverage'],
            'test/herehere.test.js' : [ 'browserify' ]
        },

        frameworks: [ 'jasmine', 'browserify' ],

        browserify: {
            debug: true
        },

        reporters: [ 'progress', 'coverage', 'html' ],

        coverageReporter: {
            reporters:[
                {type: 'html', dir: 'coverage/' },
                {type: 'text-summary'}
            ]
        },

        htmlReporter: {
            outputDir: 'testReport', // where to put the reports
            templatePath: null, // set if you moved jasmine_template.html
            focusOnFailures: true, // reports show failures on start
            namedFiles: false, // name files instead of creating sub-directories
            pageTitle: null, // page title for reports; browser info by default
            urlFriendlyName: false // simply replaces spaces with _ for files/dirs
        },

        browsers: [ 'Chrome', 'PhantomJS' ],
});
};