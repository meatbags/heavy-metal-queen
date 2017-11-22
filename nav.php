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
    <span id='page-no'></span>
  </div>
</div>

<div id='menu-chapters' class='menu'>
  <div class='menu__inner'>
    <div class='menu__inner-pad'>&nbsp;</div>
    <div class='menu-row'><br /></div>
    <?php
    $query = new WP_Query(array(
      'post_type' => 'chapters',
      'orderby' => 'menu_order'
    ));

    if ($query->have_posts()) {
      while ($query->have_posts()) {
          $query->the_post();
          global $post;
          $slug = $post->post_name;
          $title = get_the_title();
          ?>

      <div class='menu-row chapter-item' data-target='#<?php echo $slug; ?>'>
        <?php echo $title; ?>
      </div>

    <?php
      }
    }
    wp_reset_query();
    ?>
    <div class='menu-row'><br /></div>
    <div class='menu-row'>
      <div class='close-menu'>&otimes;</div>
    </div>
  </div>
</div>

<div id='menu-about' class='menu'>
  <div class='menu__inner'>
    <div class='menu__inner-pad'>&nbsp;</div>
    <div class='menu-row'><br /></div>
    <div class='menu-row'>
      Matt Weismantel is an artist working in blah
    </div>
    <div class='menu-row'>
      blah, etc. etc lorem ipsum.
    </div>
    <div class='menu-row'><br /></div>
    <div class='menu-row'>
      <a href='https://www.instagram.com/mattcasey1789/' target='_blank'>INSTAGRAM</a>
    </div>
    <div class='menu-row'>
      <a href='https://www.facebook.com/matt.weismantel.3' target='_blank'>FB</a>
    </div>
    <div class='menu-row'><br /></div>
    <div class='menu-row'>
      <div class='close-menu'>&otimes;</div>
    </div>
  </div>
</div>
