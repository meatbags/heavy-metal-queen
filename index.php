<?php
get_header();

?>
<div class='post'>
  <div class='post__title noselect text-regular underlined'>
    <?php echo get_bloginfo('description'); ?>
  </div>
</div>
<?php

$query = new WP_Query(array(
  'post_type' => 'post',
  'orderby' => 'menu_order'
));
if ($query->have_posts()) {
  while ($query->have_posts()) {
      $query->the_post();
      $title = get_the_title();
      $content = apply_filters('the_content', get_the_content());
?>
  <div class='post'>
    <div class='post__title text-regular reveal-sibling noselect clickable'>
      <?php echo $title; ?>
    </div>
    <div class='post__body text-small reveal'>
      <div class='post__body__inner reveal-inner'>
        <?php echo $content; ?>
      </div>
    </div>
  </div>
<?php
  }
}
get_footer();
?>
