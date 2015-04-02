"use strict";

var gulp                     = require('gulp')
      , less                    = require('gulp-less')
      , watch                 = require('gulp-watch')
      , runSequence     = require('run-sequence')
      , rimraf                 = require('gulp-rimraf')
      , concat                = require('gulp-concat')
      , minifyCss           = require('gulp-minify-css')
      , lessBase            = 'less'
      , jsBase                = 'js'
      , destination          = 'styles'
      , lessFiles             = lessBase + '/**/main.less'
      , watchLessFiles  = lessBase + '/**/*.less'
      ;

gulp.task('default', function (cb) {
  runSequence('clean', ['less'], cb);
});

gulp.task('clean', function(cb) {
    return gulp.src(destination).pipe(rimraf());
});

gulp.task('less', function() {
  return gulp.src(lessFiles)
  .pipe(less())
  // .pipe(minifyCss()) // Use when ready to go to production
  // .pipe(concat('main.css'))
  .pipe(gulp.dest(destination))
});

gulp.watch(watchLessFiles, function(cb) {
  runSequence('less');
});

