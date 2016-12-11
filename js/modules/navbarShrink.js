(function () {
  'use strict';
  /*
  * Navbar shrink
  */
  var navbarShrink = {
    config: {
      $navbar: $('.navbar-default .navbar-nav>li>a')
    },
    bindNavbarShrink: function () {
      $(document).on('scroll', this.handleNavbarShrink.bind(this));
    },
    handleNavbarShrink: function () {
      if ($(document).scrollTop() > 20) {
        this.sizeDown();
      } else {
        this.sizeUp();
      }
    },
    sizeDown: function () {
      this.config.$navbar.css({
        'padding-top': '15px',
        'padding-bottom': '9px'
      });
    },
    sizeUp: function () {
      this.config.$navbar.css({
        'padding-top': '30px',
        'padding-bottom': '24px'
      });
    },
    initialize: function () {
      this.bindNavbarShrink();
    }
  };

  module.exports = navbarShrink;
})()
