const App = {
  init: function() {
    App.pages = $('.page');
    App.pageNo = '';
    App.parallaxPadding = 50;
    App.parallaxMax = 0.2;

    // title flicker
    App.flicker = true;
    App.startFlicker(100);

    // remove pre
    $('.pre').removeClass('pre');

    // click events
    $('.prompt, .title-prompt').on('click', function(){
      $('html, body').animate({
        scrollTop: window.innerHeight + 'px'
      }, 1250);
    });

    $('.nav-item').on('click', function(){
      var target = $(this).data('target');
      App.toggleMenu($(this), target);
    });

    $('.close-menu').on('click', function(){
      App.closeMenu();
    });

    $('.chapter-item').on('click', function(){
      var selector = $(this).data('target');
      App.closeMenu();

      var y = $(selector).offset().top;
      $('html, body').scrollTop(y);
    });

    // scroll/ parallax
    App.parallax();
    App.onScroll();
    $(document).on('scroll', function(){
      App.onScroll();
    });

    // remove loading screen
    $('.loading-screen').css({pointerEvents: 'none'});
    $('.loading-screen').fadeOut(1000);

    // resize
    $(window).resize(function(){ App.resize(); });
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
      App.closeMenu();
    } else {
      App.closeMenu();
      $(target).addClass('active');
      $(target).find('.menu-row').each(function(i,e){
        var $e = $(e);
        setTimeout(
          function(){
            $e.addClass('active');
          }, i * 100
        );
      });
      $trigger.addClass('active');
    }
  },

  closeMenu: function() {
    $('.menu, .nav-item, .menu-row').removeClass('active');
  },

  parallax: function() {
    // resize parallax elements

    $('.parallax').each(function(i, e){
      var $sib = $(e).siblings('img');
      var $img = $(e).find('img');
      $img.css({
        width: (($img[0].naturalWidth / $sib[0].naturalWidth) * $sib.width()) + 'px'
      })
    });
  },

  resize: function() {
    // resize parallax elements

    App.parallax();
  },

  processParallax: function(y, limit) {
    var y0 = y - App.parallaxPadding;
    var y1 = limit + App.parallaxPadding;

    $('.parallax').each(function(i, e){
      var $e = $(e);
      var top = $e.offset().top + $e.height() / 2;

      if (top > y0 && top < y1) {
        var newY = ((y - top) / (window.innerHeight / 2)) * (App.parallaxMax * window.innerHeight);
        $e.css({
          transform: `translateY(${newY}px)`
        })
      }
    });
  },

  onScroll: function() {
    var y = $(document).scrollTop(),
      h = window.innerHeight,
      limit = y + h;

    // parallax
    App.processParallax(y, limit);

    // close open menus
    if ($('.menu').hasClass('active')) {
      App.closeMenu();
    }

    // very top
    if (y < h / 2) {
      // show prompt
      if ($('.prompt').hasClass('active')) {
        $('.prompt').removeClass('active');
      }

      // hide status bar
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

      // hide background
      if ($('.background-gradient').hasClass('active')){
        $('.background-gradient').removeClass('active');
      }
    } else {
      // regular content
      if (App.flicker) {
        App.flicker = false;
      }

      // show background
      if (!$('.background-gradient').hasClass('active')){
        $('.background-gradient').addClass('active');
      }
    }

    // footer
    if (limit > $('.footer').offset().top) {
      // hide status bar
      if ($('.status').hasClass('active')) {
        $('.status').removeClass('active');
      }
    }

    // global
    // get page number

    for (var i=0; i<App.pages.length; i+=1) {
      var $page = $(App.pages[i]);
      var top = $page.offset().top;

      // get current page
      if (top > y && top < limit) {
        App.pageNo = $page.data('number');
        var num = $('#page-no').html();
        if (num != App.pageNo) {
          $('#page-no').html(App.pageNo);
        }
        break;
      }

      // get previous page
      else if (top > limit && i != 0) {
        $page = $(App.pages[i-1]);
        App.pageNo = $page.data('number');
        var num = $('#page-no').html();
        if (num != App.pageNo) {
          $('#page-no').html(App.pageNo);
        }
        break;
      }
    }
  }
};

window.onload = App.init;
