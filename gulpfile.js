/// <reference path="typings/node/node.d.ts"/>

var gulp = require('gulp');
var app = require('./app');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default',function(){

})


gulp.task('serve', function() {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['www']
    }
  });

  gulp.watch([
    'www/*.html',
    'www/js/**/*.js',
    'www/css/**/*.css',
    'www/images/**/*',
    'www/fonts/**/*'
  ]).on('change', reload);
});