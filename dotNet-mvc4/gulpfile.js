"use strict";

var gulp                     = require('gulp')
      , less                    = require('gulp-less')
      , watch                 = require('gulp-watch')
      , runSequence     = require('run-sequence')
      , concat                = require('gulp-concat')
      , minifyCss           = require('gulp-minify-css')
      , rename              = require('gulp-rename')
      , uglify                   = require('gulp-uglify')

      , styleBase            = 'Content/'
      , styleSource        = styleBase + 'less/'
      , watchLessFiles  = styleSource + '/**/*.less'
      , lessFiles             = styleSource + '/**/main.less'

      , jsBase                = 'Scripts/'
      , jsSource             = jsBase + 'lib/'
      , watchJsFiles       = jsSource + '/**/*.js'
      ;

gulp.task('default', function (cb) {
  runSequence(['less', 'js', 'cssMinification'], cb);
});

gulp.task('less', function() {
  return gulp.src(lessFiles)
  .pipe(less())
  // .pipe(minifyCss()) // Use when ready to go to production - minify/uglify
  .pipe(concat('main.css'))
  .pipe(gulp.dest(styleBase))
});

gulp.task('cssMinification', function() {
  return gulp.src(styleBase + 'main.css')
  .pipe(minifyCss()) // Use when ready to go to production - minify/uglify
  .pipe(rename('main.min.css'))
  .pipe(gulp.dest(styleBase))
});

gulp.task('js', function() {
  return gulp.src(watchJsFiles)
  // .pipe(uglify()) // Use when ready to go to production - minify/uglify
  .pipe(concat('main.js'))
  .pipe(gulp.dest(jsBase))
});

gulp.watch(watchLessFiles, function(cb) {
  runSequence('less', 'cssMinification');
});

gulp.watch(watchJsFiles, function(cb) {
  runSequence('js');
});

