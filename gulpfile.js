"use strict";

var gulp                     = require('gulp')
      , less                    = require('gulp-less')
      , watch                 = require('gulp-watch')
      , runSequence     = require('run-sequence')
      , rimraf                 = require('gulp-rimraf')
      , concat                = require('gulp-concat')
      , minifyCss           = require('gulp-minify-css')
      , uglify                   = require('gulp-uglify')

      , lessBase            = 'less'
      , watchLessFiles  = lessBase + '/**/*.less'
      , lessDestination   = 'styles'
      , lessFiles             = lessBase + '/**/main.less'

      , jsBase                = 'js'
      , watchJsFiles      = jsBase + '/**/*.js'
      , jsDestination      = 'scripts'
      , jsFiles                 = jsBase + '/**/*.js'
      ;

gulp.task('default', function (cb) {
  runSequence('clean', ['less', 'js'], cb);
});

gulp.task('clean', function(cb) {
    return gulp.src(lessDestination).pipe(rimraf());
});

gulp.task('less', function() {
  return gulp.src(lessFiles)
  .pipe(less())
  // .pipe(minifyCss()) // Use when ready to go to production - minify/uglify
  // .pipe(concat('main.css'))
  .pipe(gulp.dest(lessDestination))
});

gulp.task('js', function() {
  return gulp.src(jsFiles)
  // .pipe(uglify({mangle: false})) // Use when ready to go to production - minify/uglify
  .pipe(concat('main.js'))
  .pipe(gulp.dest(jsDestination))
});

gulp.watch(watchLessFiles, function(cb) {
  runSequence('less');
});

gulp.watch(watchJsFiles, function(cb) {
  runSequence('js');
});

