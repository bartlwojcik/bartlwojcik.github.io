(function() {
  'use strict';
  /*
    Navigation
  */
  var navigation = {
    config: {
      home: '#home',
      $body: $('html, body'),
      $wHeight: $(window).height()
    },
    bindNavigation: function (clicked, destination) {
      $(clicked).on('click', this.handleNavigation.bind(this, destination));
    },
    handleNavigation: function (destination) {
      if (destination !== '#home') {
        this.config.$body.animate({
          scrollTop: $(destination).offset().top + 50 + (this.config.$wHeight * 0.065)
        }, 1000);
        return false;
      } else {
        this.config.$body.animate({
          scrollTop: $(destination).offset().top
        }, 1000);
        return false;
      }
    },
    initialize: function () {
      this.bindNavigation('#link1','#home');
      this.bindNavigation('#link2','#skills');
      this.bindNavigation('#link3','#resume');
      this.bindNavigation('#link4','#about');
      this.bindNavigation('#link5','#contact');
      this.bindNavigation('#btn-contact','#contact');
    }
  };

  module.exports = navigation;
})()
