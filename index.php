<?php
get_header();
?>

<div class='loading-screen'>
  <div class='loading-screen__inner'>
    <div class='loading-message'>
      LOADING
    </div>
    <div class='loading-bar'>
      <div class='loading-bar__inner'></div>
    </div>
  </div>
</div>

<div class='nav'>
  <div class='nav-item' data-target='#menu-chapters'>
    CHAPTERS
  </div>
  <div class='nav-item' data-target='#menu-about'>
    ABOUT
  </div>
</div>

<div class='status'>
  <div class='status-item'>
    <span id='page-no'>1</span>
  </div>
</div>

<div id='menu-chapters' class='menu'>
  <div class='menu__inner'>
    <div class='menu__inner-pad'>&nbsp;</div>
    CHAPTERS
  </div>
</div>
<div id='menu-about' class='menu'>
  <div class='menu__inner'>
    <div class='menu__inner-pad'>&nbsp;</div>
    ABOUT<br />
    instagram<br />
    facebook<br />
    etsy, etc.
  </div>
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

<div class='prompt pre text-large'>&#9660;</div>

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
