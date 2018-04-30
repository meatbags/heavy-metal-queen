<?php
get_header();
?>

<div class='loading-screen'>
  <div class='loading-screen__inner'>
    <div class='loading-message'>
      LOADING...
    </div>
    <div class='loading-bar'>
      <div class='loading-bar__inner'></div>
    </div>
  </div>
</div>

<div class='background-gradient'>
  <img src='<?php echo get_template_directory_uri() . '/lib/images/gradient.jpg'; ?>' />
</div>

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
  <div class='layer'>
    <div class='title-prompt'>
    </div>
  </div>
</div>

<?php get_template_part('nav'); ?>

<div class='prompt pre text-large'>
  &dArr;
</div>

<?php
$query = new WP_Query(array(
  'post_type' => 'chapters',
  'orderby' => 'menu_order'
));
$pageNo = 0;

if ($query->have_posts()) {
  while ($query->have_posts()) {
      $query->the_post();
      global $post;
      $slug = $post->post_name;
      $title = get_the_title();
      $pages = get_field('pages');
      ?>

    <div class='chapter' id='<?php echo $slug;?>'>
      <?php
      foreach($pages as $page):
        $pageNo++;
        $type = $page['page_type'];
        $src = $page['image']['sizes']['large'];
        $srcParallax = ($type == 'parallax') ? $page['parallax_image']['sizes']['large'] : '';
        ?>

        <div class='page' data-number='<?php echo $pageNo; ?>'>
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
