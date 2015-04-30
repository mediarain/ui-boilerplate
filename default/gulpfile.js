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

    , styleBase            = 'styles/'
    , styleSource          = styleBase + 'less/'
    , cssBuild             = styleBase + 'main.css'
    , watchLessFiles       = styleSource + '/**/*.less'
    , lessFiles            = styleSource + '/**/main.less'

    , jsBase               = 'js/'
    , jsSource             = jsBase + 'lib/'
    , jsBuild              = jsBase + 'main.js'
    , watchJsFiles         = jsSource + '/**/*.js'
    ;

gulp.task('less', function() {
  return gulp.src(lessFiles)
  .pipe(less())
  .on('error', function(err) {
    console.log(err);
    this.emit('end');
  })
  .pipe(concat('main.css'))
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

gulp.task('default', function (cb) {
  gulp.watch(watchLessFiles, ['less']);
  gulp.watch(watchJsFiles, ['js']);
  runSequence(['less', 'js'], /* ['buildCss','buildJs'], */ cb);
});

