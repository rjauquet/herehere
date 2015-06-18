var gulp = require('gulp'),
    karma = require('karma').server;

gulp.task('test', function (done){
    karma.start({
        configFile: __dirname + '/karma.config.js',
        singleRun: true
    }, done);
});

gulp.task('tdd', function (done){
    karma.start({
        configFile: __dirname + '/karma.config.js',
        singleRun: false
    }, done);
});