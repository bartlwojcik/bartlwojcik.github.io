//smooth scrolling function
function scrollTo(clicked,destination) {
  $(clicked).on('click', function() {
    var wHeight = $(window).height();
    if (destination !== '#home') {
      $('html, body').animate({
        scrollTop: $(destination).offset().top + 50 + (wHeight * 0.065)
      }, 1000);
      return false;
    } else {
      $('html, body').animate({
        scrollTop: $(destination).offset().top
      }, 1000);
      return false;
    }
  });
};

$(function () {
  //loading screen
  $(".se-pre-con").delay(2000).fadeOut(2000);

  //box and links animated color change on hover
  $('.box').hover(
    function() {
      $(this).animate({backgroundColor: '#fc6453'}, 200).css('cursor','crosshair');
		},
    function() {
      $(this).animate({backgroundColor: '#9acec5'}, 200);
		}
	);
  $('i.fa, a.cv').hover(
    function() {
      $(this).animate({color: '#9acec5'}, 200);
		},
    function() {
      $(this).animate({color: 'white'}, 200);
		}
	);

  //smooth scrolling to sections
  scrollTo('#link1','#home');
  scrollTo('#link2','#skills');
  scrollTo('#link3','#resume');
  scrollTo('#link4','#about');
  scrollTo('#link5','#contact');
  scrollTo('#btn-contact','#contact');

  $(window).on('scroll', function() {

    //navbar height animation
    if ($(document).scrollTop() > 20) {
      $('.navbar-default .navbar-nav>li>a').css({
        'padding-top':'15px',
        'padding-bottom':'9px'
      });
    } else {
      $('.navbar-default .navbar-nav>li>a').css({
        'padding-top':'30px',
        'padding-bottom':'24px'
      });
    }

    var wWidth = $(window).width();
    console.log(wWidth);
    if (wWidth > 768) {
      //fading in sections
      $('.hide-me').each(function() {
        var bottomOfObject = $(this).offset().top + $(this).outerHeight();
        var bottomOfWindow = $(window).scrollTop() + $(window).height();

        if (bottomOfWindow > (bottomOfObject - 500)) {
          $(this).animate({
            'opacity':'1',
          },500);
        }
      });
    } else {
      $('.hide-me').css('opacity','1');
    }
  });

  //contact form
  $('#form').on('submit', function(e) {
    e.preventDefault();
    //button spinner during loadnig
    $('#form-submit').html('<i class="fa fa-circle-o-notch fa-spin fa-fw"></i>');

    var name = $('#form-name').val();
    var mail = $('#form-mail').val();
    var subject = $('#form-subject').val();
    var message = $('#form-message').val();

    console.log('name: ' + name + ' mail: ' + mail + ' subject: ' + subject + ' message: ' + message);

    $.ajax({
      url:'https://formspree.io/bartlomiejwojcik92@gmail.com',
      method: 'POST',
      data:{
        name:name,
        _replyto:mail,
        _subject:subject,
        body:message
      },
      dataType: 'json',
      success: function() {
        console.log('Mail sent.');
        $('#form').animate({
          'opacity':'0'
        }, 1000).css({
          'display':'none'
        });
        $('.thanks').css({
          'display':'block'
        }).animate({
          'opacity':'1'
        }, 1000);
      }
    });
  });

})
