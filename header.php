<!DOCTYPE html>
<html lang="en">
<head>
	<title><?php bloginfo('name'); ?></title>
	<meta name="description" content="<?php bloginfo(); ?>">
	<meta charset="utf-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
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

<div class='background'></div>
<div class='background-alt'></div>
<div class='time text-large noselect'>time →</div>

<div class="content">
	<div class="wrapper">
		<?php get_template_part('nav'); ?>
