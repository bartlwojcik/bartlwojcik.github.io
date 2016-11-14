'use strict';

(function () {
  /*
  * fading in sections
  */

  var fade = {
    config: {
      $hideMe: $('.hide-me')
    },
    bindFade: function () {
      this.$wWidth = $(window).width();
      $(window).on('scroll', this.handleFade.bind(this));
    },
    handleFade: function () {
      if (this.$wWidth > 768) {
        this.config.$hideMe.each(this.fadeIn);
      } else {
        this.config.showNow();
      }
    },
    fadeIn: function () {
      var $elem = $(this);
      var bottomOfObject = $elem.offset().top + $elem.outerHeight();
      var bottomOfWindow = $(window).scrollTop() + $(window).height();

      if (bottomOfWindow > (bottomOfObject - 500)) {
        $elem.animate({
          'opacity': '1'
        }, 500);
      }
    },
    showNow: function () {
      this.config.$hideMe.css('opacity','1');
    },
    initialize: function () {
      this.bindFade();
    },
  };

  module.exports = fade;
})()
