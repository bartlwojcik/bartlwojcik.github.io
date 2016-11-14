(function () {
  /*
    Skills boxes change on hover
  */
  var skillsColorChange = {
    config: {
      $box: $('.box')
    },
    bindColorChange: function () {
      this.config.$box.on('mouseenter', this.handleColorChange).on('mouseleave', this.handleColorReturn);
    },
    handleColorChange: function () {
      this.animate({
        backgroundColor: '#fc6453'
      }, 200).css(
        'cursor', 'crosshair'
      );
    },
    handleColorReturn: function () {
      this.animate({
        backgroundColor: '#9acec5'
      }, 200);
    },
    initialize: function () {
      this.bindColorChange();
    }
  };
  skillsColorChange.initialize();

  /*
    Links color change on hover
  */
  var linksColorChange = {
    config: {
      $link: $('i.fa, a.cv')
    },
    bindColorChange: function () {
      this.config.$link.on('mouseenter', this.handleColorChange).on('mouseleave', this.handleColorReturn);
    },
    handleColorChange: function () {
      this.animate({color: '#9acec5'}, 200);
    },
    handleColorReturn: function () {
      this.animate({color: 'white'}, 200);
    },
    initialize: function () {
      this.bindColorChange();
    }
  };
  linksColorChange.initialize();
})()
