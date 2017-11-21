<?php
get_header();
?>

<div class='title-page'>
  <div class='layer background'>
    <img src='<?php echo get_template_directory_uri() . '/lib/images/queen_background.jpg'; ?>' />
  </div>
  <div class='layer parallax-flicker'>
    <img src='<?php echo get_template_directory_uri() . '/lib/images/queen_glow.png'; ?>' />
  </div>
  <div class='layer'>
    <img src='<?php echo get_template_directory_uri() . '/lib/images/queen_title.png'; ?>' />
  </div>
</div>

<?php
$query = new WP_Query(array(
  'post_type' => 'chapters',
  'orderby' => 'menu_order'
));
if ($query->have_posts()) {
  while ($query->have_posts()) {
      $query->the_post();
      $title = get_the_title();
      $pages = get_field('pages');?>

    <div class='chapter' id='<?php echo $title;?>'>
      <?php
      foreach($pages as $page):
        $type = $page['page_type'];
        $src = $page['image']['sizes']['large'];
        $srcParallax = ($type == 'parallax') ? $page['parallax_image']['sizes']['large'] : '';
        ?>

        <div class='page'>
          <img src='<?php echo $src;?>'>
          <?php if ($type == 'parallax'): ?>
            <div class='parallax'>
              <img src='<?php echo $srcParallax;?>'>
            </div>
          <?php endif; ?>
        </div>

      <?php endforeach; ?>
    </div>

    <?php
  }
}

get_footer();
?>
