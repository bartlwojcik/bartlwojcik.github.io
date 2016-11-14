(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var loadingScreen = require('./modules/loadingScreen.js');
var navigation = require('./modules/navigation.js');
var fading = require('./modules/fading.js');
var navbarShrink = require('./modules/navbarShrink.js');
var contactForm = require('./modules/contactForm.js');

loadingScreen.initialize();
navigation.initialize();
fading.initialize();
navbarShrink.initialize();
contactForm.initialize();

},{"./modules/contactForm.js":2,"./modules/fading.js":3,"./modules/loadingScreen.js":4,"./modules/navbarShrink.js":5,"./modules/navigation.js":6}],2:[function(require,module,exports){
'use strict';

(function() {
  /*
   * Form module
  */
  var contactForm = {
    config: {
      $contactForm: $('#form'),
      $thanks: $('.thanks')
    },
    bindSubmitForm: function () {
      this.config.$contactForm.on('submit', this.handleSubmitForm.bind(this));
    },
    handleSubmitForm: function (e) {
      e.preventDefault();
      var formValues = this.getFormValues();
      var callback = this.showThankYou();
      $.ajax({
        url:'https://formspree.io/bartlomiejwojcik92@gmail.com',
        method: 'POST',
        data: formValues,
        dataType: 'json',
        success: callback,
      });
    },
    showThankYou: function () {
      this.config.$contactForm.animate({
        'opacity':'0'
      }, 1000).css({
        'display':'none'
      });
      this.config.$thanks.css({
        'display':'block'
      }).animate({
        'opacity':'1'
      }, 1000);
    },
    getFormValues: function () {
      return {
        name: $('#form-name').val(),
        _replyto: $('#form-mail').val(),
        _subject: $('#form-subject').val(),
        body: $('#form-message').val(),
      }
    },
    initialize: function () {
      this.bindSubmitForm();
    },
  };

  module.exports = contactForm;
})()

},{}],3:[function(require,module,exports){
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

},{}],4:[function(require,module,exports){
(function () {
  /*
  * loading screen
  */
  var loadingScreen = {
    config: {
      $loading: $('.se-pre-con')
    },
    initialize: function () {
      this.config.$loading.delay(2000).fadeOut(2000);
    }
  };

  module.exports = loadingScreen;
})()

},{}],5:[function(require,module,exports){
(function () {
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

},{}],6:[function(require,module,exports){
(function() {
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
        return false
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

},{}]},{},[1]);
