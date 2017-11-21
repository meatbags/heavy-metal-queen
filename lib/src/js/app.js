const App = {
  init: function() {
    // dropdown
    $('.reveal-sibling').on('click', function() {
      $siblings = $(this).siblings('.reveal');
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $siblings.css('height', $siblings.find('.reveal-inner').outerHeight());
      } else {
        $siblings.css('height', 0);
      }
    });

    // mouse
    /*
    $(window).on('mousemove', function(e){
      App.onMouseMove(e);
    })
    */
  },

  onMouseMove: function(e) {
    if (e.clientY > window.innerHeight / 2) {
      if (!$('.background-alt').hasClass('active')) {
        $('.background-alt').addClass('active');
      }
    } else {
      if ($('.background-alt').hasClass('active')) {
        $('.background-alt').removeClass('active');
      }
    }
  }
};

window.onload = App.init;
