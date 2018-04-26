class Menu {
  constructor() {
    // menu & sceens
    this.flicker = true;
    this.flickerTarget = $('.parallax-flicker');
    this.startFlicker(100);
    this.setup();
  }

  setup() {
    // rm loading
    $('.pre').removeClass('pre');
    $('.loading-screen').css({pointerEvents: 'none'});
    $('.loading-screen').fadeOut(1000);

    // events, navigation
    $('.prompt, .title-prompt').on('click', () => {
      $('html, body').animate({
        scrollTop: window.innerHeight + 'px'
      }, 1250);
    });

    $('.nav-item').on('click', (e) => {
      var target = $(e.currentTarget).data('target');
      this.toggleMenu($(e.currentTarget), target);
    });

    $('.close-menu').on('click', () => {
      this.closeMenu();
    });

    $('.chapter-item').on('click', (e) => {
      var $e = $(e.currentTarget);
      var selector = $e.data('target');
      App.closeMenu();

      var y = $(selector).offset().top;
      $('html, body').scrollTop(y);
    });
  }

  resumeFlicker() {
    if (!this.flicker) {
      this.flicker = true;
      this.startFlicker(100);
    }
  }

  disableFlicker() {
    this.flicker = false;
  }

  startFlicker(time) {
    setTimeout(() => {
      if (this.flicker) {
        const t = Math.random() * 300 + 200;
        var op;

        if (parseFloat(this.flickerTarget.css("opacity")) < 0.6) {
          op = 0.6 + Math.random() * 0.4;
        } else {
          op = 0.6 - Math.random() * 0.3;
        }

        this.flickerTarget.css({opacity: op});
        this.startFlicker(t);
      }
    }, time);
  }

  toggleMenu($trigger, target) {
    if ($(target).hasClass('active')) {
      this.closeMenu();
    } else {
      this.closeMenu();
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
  }

  closeMenu() {
    $('.menu, .nav-item, .menu-row').removeClass('active');
  }
}

export { Menu };
