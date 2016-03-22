/**
 * Gulp settings.
 *
 * @package cktheme
 */

"use strict";

var gulp					= require( 'gulp' )
	, less					= require( 'gulp-less' )
	, indent				= require( './custom-gulp/indent' )
	, watch					= require( 'gulp-watch' )
	, runSequence			= require( 'run-sequence' )
	, concat				= require( 'gulp-concat' )
	, minifyCss				= require( 'gulp-minify-css' )
	, uglify				= require( 'gulp-uglify' )
	, autoprefixer			= require( 'gulp-autoprefixer' )
	, rename				= require( 'gulp-rename' )

	, styleBase				= './'
	, styleSource			= styleBase + 'less/'
	, cssBuild				= styleBase + 'style.css'
	, watchLessFiles		= styleSource + '/**/*.less'
	, lessFiles				= styleSource + '/**/main.less'

	, jsBase				= 'scripts/'
	, jsLib					= jsBase + 'lib/'
	, jsSlides				= jsBase + 'slides/**/*.js'
	, jsTemplates			= jsBase + 'templates/**/*.js'
	, jsMain				= jsBase + 'main.js'
	, watchJsLibFiles		= jsLib + '/**/*.js'
	, phpcs					= require( 'gulp-phpcs' );

gulp.task( 'less', function() {
	return gulp.src( lessFiles )
	.pipe( less() )
	.on( 'error', function( err ) {
		console.log( err );
		this.emit( 'end' );
	})
	.pipe( concat( 'style.css' ) )
	.pipe( autoprefixer({
		browsers: ['last 4 versions'],
		cascade: false
	}))
	.pipe(indent({
		tabs: true,
		amount: 1
	}))
	.pipe( gulp.dest( styleBase ) )
	// .pipe( minifyCss( {compatibility: 'ie9'} ) )
});

gulp.task( 'js_libs', function() {
	return gulp.src( watchJsLibFiles )
	.pipe( concat( 'libs.js' ) )
	.pipe( uglify() )
	.pipe( rename( { suffix: '.min' } ) )
	.pipe( gulp.dest( jsBase ) )
});

gulp.task( 'min_js_main', function() {
	return gulp.src( [jsMain, jsTemplates, jsSlides] )
	.pipe( concat( 'main.min.js' ) )
	.pipe( uglify() )
	.pipe( gulp.dest( jsBase ) )
});

gulp.task('phpcs', function () {
	return gulp.src( ['./**/*.php', '!src/vendor/**/*.*'] )
		// Validate files using PHP Code Sniffer.
		.pipe(phpcs({
			bin: 'c:\\php\\phpcs',
			standard: 'WordPress-Strict-Windows',
			warningSeverity: 0
		}))
		// Log all problems that was found.
		.pipe( phpcs.reporter( 'log' ) );
});

gulp.task( 'default', function (cb) {
	gulp.watch( watchLessFiles, ['less'] );
	gulp.watch( watchLessFiles, ['liveChatLess'] );
	gulp.watch( watchJsLibFiles, [ 'js_libs' ] );
	gulp.watch( [jsSlides, jsTemplates, jsMain], [ 'min_js_main' ] );

	runSequence( [ 'less', 'liveChatLess', 'js_libs', 'min_js_main' ], cb );
});
