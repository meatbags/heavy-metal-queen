const App = {
  init: function() {
    // title flicker
    App.flicker = true;
    App.startFlicker(100);

    // remove pre
    $('.pre').removeClass('pre');

    // click events
    $('.prompt, .title-prompt').on('click', function(){
      $('html, body').animate({
        scrollTop: window.innerHeight + 'px'
      }, 1200);
    });

    $('.nav-item').on('click', function(){
      var target = $(this).data('target');
      App.toggleMenu($(this), target);
    });

    // scroll/ parallax
    App.parallax();
    $(document).on('scroll', function(){
      App.onScroll();
    });

    // remove loading screen
    $('.loading-screen').css({pointerEvents: 'none'});
    $('.loading-screen').fadeOut(1000);
  },

  startFlicker: function(time) {
    // start flickering
    setTimeout(function(){
      if (App.flicker) {
        var op, t;

        op = 0.4 + 0.6 * Math.random();
        t = Math.random() * 500 + 100;

        $('.parallax-flicker').css({opacity: op});
        App.startFlicker(t);
      }
    }, time);
  },

  toggleMenu: function($trigger, target) {
    if ($(target).hasClass('active')) {
      $('.menu, .nav-item').removeClass('active');
    } else {
      $('.menu, .nav-item').removeClass('active');
      $(target).addClass('active');
      $trigger.addClass('active');
    }
  },

  parallax: function() {

  },

  onScroll: function() {
    var y = $(document).scrollTop(),
      h = window.innerHeight;

    // close open menus
    if ($('.menu').hasClass('active')) {
      $('.menu, .nav-item').removeClass('active');
    }

    // very top
    if (y < h / 2) {
      // show prompt
      if ($('.prompt').hasClass('active')) {
        $('.prompt').removeClass('active');
      }

      // show status bar
      if ($('.status').hasClass('active')) {
        $('.status').removeClass('active');
      }
    } else {
      // remove prompt
      if (!$('.prompt').hasClass('active')) {
        $('.prompt').addClass('active');
      }

      // show status bar
      if (!$('.status').hasClass('active')) {
        $('.status').addClass('active');
      }
    }

    // title page
    if (y < h) {
      // resume flicker
      if (!App.flicker) {
        App.flicker = true;
        App.startFlicker(100);
      }


    } else {
      // regular content
      if (App.flicker) {
        App.flicker = false;
      }
    }
  }
};

window.onload = App.init;
