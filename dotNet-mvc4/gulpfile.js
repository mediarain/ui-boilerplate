"use strict";

var gulp                     = require('gulp')
      , less                    = require('gulp-less')
      , watch                 = require('gulp-watch')
      , runSequence     = require('run-sequence')
      , concat                = require('gulp-concat')
      , minifyCss           = require('gulp-minify-css')
      , uglify                   = require('gulp-uglify')

      , styleBase            = 'styles/'
      , styleSource        = styleBase + 'less/'
      , watchLessFiles  = styleSource + '/**/*.less'
      , lessFiles             = styleSource + '/**/main.less'

      , jsBase                = 'js/'
      , jsSource             = jsBase + 'lib/'
      , watchJsFiles       = jsSource + '/**/*.js'
      ;

gulp.task('default', function (cb) {
  runSequence(['less', 'js'], cb);
});

gulp.task('less', function() {
  return gulp.src(lessFiles)
  .pipe(less())
  // .pipe(minifyCss()) // Use when ready to go to production - minify/uglify
  .pipe(concat('main.css'))
  .pipe(gulp.dest(styleBase))
});

gulp.task('js', function() {
  return gulp.src(watchJsFiles)
  // .pipe(uglify()) // Use when ready to go to production - minify/uglify
  .pipe(concat('main.js'))
  .pipe(gulp.dest(jsBase))
});

gulp.watch(watchLessFiles, function(cb) {
  runSequence('less');
});

gulp.watch(watchJsFiles, function(cb) {
  runSequence('js');
});

