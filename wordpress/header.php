<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package uiboilerplate
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>

	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta http-equiv="Content-Type" content="text/html; <?php bloginfo( 'charset' ); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>

	<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>/img/apple-touch-icon.png">
	<link type="img/png" rel="icon" href="<?php echo get_template_directory_uri(); ?>/img/favicon.png">

</head>
<body <?php body_class(); ?>>
<!--[if lt IE 8]>
	<p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
<![endif]-->

	<div class="wrapper">

		<header>

			<div class="row-one row">
				<div class="container">

					<h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>

					<?php wp_nav_menu( array( 'theme_location' => 'secundary', 'menu_class' => 'toolbar' ) ); ?>

				</div> <!-- /.container -->
			</div> <!-- /.row-one -->

			<div class="row-two row">
				<div class="container">

					<a class="logo" href="<?php echo esc_url( home_url( '/' ) ); ?>">
						<img src="<?php echo get_template_directory_uri(); ?>/img/logo.png" alt="">
					</a>

					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_class' => 'nav' ) ); ?>

					<div class="search-box">
						<?php get_search_form(); ?>
					</div> <!-- /.search-box -->

				</div> <!-- /.container -->
			</div> <!-- /.row-two -->

		</header>
