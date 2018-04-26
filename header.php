<!DOCTYPE html>
<html lang="en">
<head>
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo(); ?>">
	<meta charset="utf-8" />
	<meta property="og:url" content="http://www.heavymetalqueen.com" />
	<meta property="og:title" content="Heavy Metal Queen"/>
	<meta property="og:image" content="<?php echo get_template_directory_uri(); ?>/lib/images/queen_og.jpg"/>
	<meta property="og:site_name" content="Heavy Metal Queen"/>
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link href="https://fonts.googleapis.com/css?family=Playfair+Display" rel="stylesheet">
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
	<script type='text/javascript' src='<?php echo get_template_directory_uri(); ?>/lib/build/jquery-3.2.1.min.js'></script>
	<?php wp_head(); ?>
	<script>
		/* <![CDATA[ */
		var themePath = '<?php echo get_template_directory_uri(); ?>';
		var pageTitle = '<?php echo get_the_title(); ?>';
		var isHome = '<?php echo is_home(); ?>';
		var ajaxUrl = '<?php echo admin_url('admin-ajax.php'); ?>';
		/* ]]> */
	</script>
</head>
<body class="<?php echo join(' ', get_body_class(''));?>">
<div class="content">
	<div class="wrapper">
		<?php get_template_part('nav'); ?>
