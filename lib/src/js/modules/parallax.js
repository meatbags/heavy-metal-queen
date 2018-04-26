class Parallax {
  constructor(target) {
    // scroll & parallax
    this.target = target;
    this.pages = $('.page');
    this.pageNo = '';
    this.parallaxMax = 0.175;

    // init
    this.setSize();

    // events
    $(document).on('scroll', () => { this.onScroll(); });
    $(window).resize(() => { this.setSize(); });
  }

  setSize() {
    $('.parallax').each(function(i, e){
      var $sib = $(e).siblings('img');
      var $img = $(e).find('img');
      $img.css({
        width: (($img[0].naturalWidth / $sib[0].naturalWidth) * $sib.width()) + 'px'
      })
    });
  }

  doParallax(y, limit) {
    // apply parallax effects
    const y0 = y - window.innerHeight * 1.5;
    const y1 = limit + window.innerHeight * 1.5;

    $('.parallax').each(function(i, e){
      const $e = $(e);
      const top = $e.offset().top + $e.height() / 2;

      if (top > y0 && top < y1) {
        const newY = ((y - top) / (window.innerHeight / 2)) * (this.parallaxMax * window.innerHeight);
        $e.css({transform: `translateY(${newY}px)`});
      }
    });
  }

  onScroll() {
    const y = $(document).scrollTop();
    const h = window.innerHeight;
    const limit = y + h;

    // parallax
    this.doParallax(y, limit);

    // close open menus
    if ($('.menu').hasClass('active')) {
      this.target.closeMenu();
    }

    // very top
    if (y < h / 2) {
      // show prompt, hide status
      if ($('.prompt').hasClass('active')) {
        $('.prompt').removeClass('active');
      }
      if ($('.status').hasClass('active')) {
        $('.status').removeClass('active');
      }
    } else {
      // remove prompt, show status bar
      if (!$('.prompt').hasClass('active')) {
        $('.prompt').addClass('active');
      }
      if (!$('.status').hasClass('active')) {
        $('.status').addClass('active');
      }
    }

    // title page
    if (y < h) {
      // resume flicker, hide background
      this.target.resumeFlicker();

      if ($('.background-gradient').hasClass('active')){
        $('.background-gradient').removeClass('active');
      }
    } else {
      // regular content
      this.target.disableFlicker();

      // show background
      if (!$('.background-gradient').hasClass('active')){
        $('.background-gradient').addClass('active');
      }
    }

    // footer, hide status bar
    if (limit > $('.footer').offset().top) {
      if ($('.status').hasClass('active')) {
        $('.status').removeClass('active');
      }
    }

    // get page number
    for (var i=0, len=this.pages.length; i<len; ++i) {
      var $page = $(this.pages[i]);
      const top = $page.offset().top;

      // get current page or previous
      if (top > y && top < limit) {
        this.pageNo = $page.data('number');
        var num = $('#page-no').html();
        if (num != this.pageNo) {
          $('#page-no').html(this.pageNo);
        }
        break;
      } else if (top > limit && i > 0) {
        $page = $(this.pages[i - 1]);
        this.pageNo = $page.data('number');
        var num = $('#page-no').html();
        if (num != this.pageNo) {
          $('#page-no').html(this.pageNo);
        }
        break;
      }
    }
  }
}

export { Parallax };
