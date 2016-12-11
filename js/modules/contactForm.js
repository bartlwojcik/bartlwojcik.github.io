(function() {
  'use strict';
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
    validateForm: function() {

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
      };
    },
    initialize: function () {
      this.bindSubmitForm();
    },
  };

  module.exports = contactForm;
})();
