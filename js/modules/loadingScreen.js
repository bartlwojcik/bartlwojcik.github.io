(function () {
  'use strict';
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
