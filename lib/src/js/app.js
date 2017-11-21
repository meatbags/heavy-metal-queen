const App = {
  init: function() {
    // title flicker
    App.flicker = true;
    App.startFlicker(100);

    // scroll/ parallax
    $(document).on('scroll', function(){ App.onScroll(); })
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

  onScroll: function() {
    var y = $(document).scrollTop(),
      h = window.innerHeight;

    // title page
    if (y < h) {
      if (!App.flicker) {
        App.flicker = true;
        App.startFlicker(100);
      }
    }
  }
};

window.onload = App.init;
