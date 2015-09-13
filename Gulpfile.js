// File: Gulpfile.js
'use strict';

var serverPort = 8080,
    host = '0.0.0.0',
    gulp = require('gulp'),
    connect = require('gulp-connect');

// Servidor web de desarrollo
gulp.task('server', function() {
    connect.server({
        root: './app',
        hostname: host,
        port: serverPort,
        livereload: true,
        middleware: function (connect, opt) {
            return [];
        }
    });
});

gulp.task('default', ['server']);
