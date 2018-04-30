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
            $title = get_the_title(); ?>
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
    <div class='menu-row'>Hi my name is Matt, I am mostly an amateur artist, I have exhibited works in a few
 	    galleries and sold a handful of works. I’m a person with a lot of ideas and a lot of stories to tell, these
      notions have been with me since I can remember and have been a formulating and shaping constant. My work
      both consists of more illustrative and more ‘artistic’ styles, with a focus mainly on people/portraits.
      <br /><br />
    </div>
	  <div class='menu-row'>I have decided after so many years of being inspired by other story tellers and artists
	    to push myself to create and share a story, ‘Heavy Metal Queen,’ to free up some space
	    in my head and see what kind of response I can get with my illustrative and
	    storytelling abilities. This is just one of many stories I have to tell.
      <br /><br />
    </div>
    <div class='menu-row'>
      <a href='https://www.instagram.com/mattcasey1789/' target='_blank'>INSTAGRAM</a>,&nbsp;
      <a href='https://www.facebook.com/matt.weismantel.3' target='_blank'>FB</a>
    </div>
    <div class='menu-row'><br /></div>
    <div class='menu-row'>
      <div class='close-menu'>&otimes;</div>
    </div>
  </div>
</div>
