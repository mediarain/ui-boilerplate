<?php
/**
 * Theme functions and definitions
 *
 * @package uiboilerplate
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( 'uiboilerplate_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function uiboilerplate_setup() {

		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on uiboilerplate, use a find and replace
		 * to change 'uiboilerplate' to the name of your theme in all the template files
		 */
		load_theme_textdomain( 'uiboilerplate', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		 */

		/* add_theme_support( 'post-thumbnails' ); */

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'primary' => __( 'Primary Menu', 'uiboilerplate' ),
			'secondary' => __( 'Secondary Menu', 'uiboilerplate' ),
		) );

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		/*
		 * Enable support for Post Formats.
		 * See http://codex.wordpress.org/Post_Formats
		 */
		add_theme_support( 'post-formats', array(
			'aside',
			'image',
			'video',
			'quote',
			'link',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'uiboilerplate_custom_background_args', array(
			'default-color' => '',
			'default-image' => '',
		) ) );
	}
endif; // uiboilerplate_setup
add_action( 'after_setup_theme', 'uiboilerplate_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function uiboilerplate_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'uiboilerplate' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
}
add_action( 'widgets_init', 'uiboilerplate_widgets_init' );

/**
 * Enqueue styles.
 */
function uiboilerplate_styles() {

	wp_enqueue_style( 'uiboilerplate-style', get_stylesheet_directory_uri() . '/style.css' );

}
add_action( 'wp_enqueue_scripts', 'uiboilerplate_styles', 10 );

/**
 * Enqueue scripts.
 */
function uiboilerplate_scripts() {
	if ( ( 'wp-login.php' !== $GLOBALS['pagenow'] ) && ( ! is_admin() ) ) {

		wp_register_script( 'jquery', 'https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.2/jquery.min.js', array(), '1.0.0', true );
		wp_enqueue_script( 'jquery' );

		wp_register_script( 'libs', get_stylesheet_directory_uri() . '/scripts/libs.min.js', array(), '1.0.0', true );
		wp_enqueue_script( 'libs' );

		wp_register_script( 'main', get_stylesheet_directory_uri() . '/scripts/main.min.js', array(), '1.0.0', true );
		wp_enqueue_script( 'main' );
	}

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'uiboilerplate_scripts', 10 );

// Hiding admin bar.
show_admin_bar( false );
