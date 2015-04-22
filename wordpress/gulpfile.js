"use strict";

var gulp                   = require('gulp')
    , less                 = require('gulp-less')
    , watch                = require('gulp-watch')
    , runSequence          = require('run-sequence')
    , concat               = require('gulp-concat')
    , minifyCss            = require('gulp-minify-css')
    , uglify               = require('gulp-uglify')
    , autoprefixer         = require('gulp-autoprefixer')
    , rename               = require('gulp-rename')

    , styleBase            = './'
    , styleSource          = styleBase + 'less/'
    , cssBuild             = styleBase + 'style.css'
    , watchLessFiles       = styleSource + '/**/*.less'
    , lessFiles            = styleSource + '/**/main.less'

    , jsBase               = 'js/'
    , jsSource             = jsBase + 'lib/'
    , jsBuild              = jsBase + 'main.js'
    , watchJsFiles         = jsSource + '/**/*.js'
    ;

gulp.task('default', function (cb) {
  runSequence(['less', 'js'], cb);
});

gulp.task('less', function() {
  return gulp.src(lessFiles)
  .pipe(less())
  .pipe(concat('style.css'))
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
  }))
  .pipe(gulp.dest(styleBase))
});

gulp.task('js', function() {
  return gulp.src(watchJsFiles)
  .pipe(concat('main.js'))
  .pipe(gulp.dest(jsBase))
});

gulp.task('buildCss', function(){
  return gulp.src(cssBuild)
  .pipe(minifyCss())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(styleBase))
});

gulp.task('buildJs', function(){
  return gulp.src(jsBuild)
  .pipe(uglify())
  .pipe(rename({ suffix: '.min' }))
  .pipe(gulp.dest(jsBase))
});

gulp.watch(watchLessFiles, function(cb) {
  runSequence('less');
});

gulp.watch(watchJsFiles, function(cb) {
  runSequence('js');
});

/* Use when going to production to minify css and js */
gulp.task('build', function(){
  runSequence('buildCss', 'buildJs');
});