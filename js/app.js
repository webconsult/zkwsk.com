// (function(){

//     // Define overriding method.
//     jQuery.fn.hide = function(){
//       //Use the foundation class to hide elements rather than inline styling.
//       $(this).addClass('hide');
//     };
//     // Define overriding method.
//     jQuery.fn.show = function(){
//       $(this).removeClass('hide');
//     };

// })();


// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){


  var video = document.getElementsByTagName('video')[0];


  setTimeout(function(){
    $('.logo').fadeIn(200);
  }, 500);

  setTimeout(function(){
    $('.logo-subtitle').fadeIn(200);
  }, 1500);

  setTimeout(function(){
    $('.resume-title').fadeIn(200);
  }, 2500);

  var playVideo = function () {
    $('html.no-touch .logo-container').addClass('opaque');
    video = $('html.no-touch .header-video');
    video.get(0).play();
    video.removeClass('hidden');
  };

  setTimeout(function(){
    playVideo();
  },3000);

  $( 'html.no-touch .header-video' ).on('timeupdate', function(){
    if( this.currentTime > ( this.duration - 3 ) ) {
      // $( 'html.no-touch .header-video' ).get(0).fadeOut(3000);
      $('.header-profile-pic').fadeIn(3000);
      $(this).addClass('hidden');
    }
  });
  $('html.no-touch .header-video').get(0).onended = function() {
    showScroller();
  };
  $('html.no-touch .header-video').on('mouseover',function(){
    showScroller();
  })
  $('html.no-touch .header-video').on('mouseout',function(){
    hideScroller();
  })

  showScroller = function() {
    // $('.scroll-down').removeClass('hide-for-medium-up');
    $('.scroll-down').fadeIn(1000);
  };

  hideScroller = function() {
    // $('.scroll-down').addClass('hide-for-medium-up');
    $('.scroll-down').fadeOut(1000);
  };


  $('a[href^="#action_"]').on('click',function(e){
    e.preventDefault();
  });

  var paperHidden = true;

  $('[href="#paper"]').on('click',function(e){
    var elem = $('.paper-container');

    if (paperHidden) {
      $('#clients').fadeOut(500, function(){
        elem.removeClass('remove-from-flow');
      });
      elem.removeClass('off-canvas');

    } else {
      e.preventDefault();


      elem.addClass('off-canvas');
      setTimeout(function(){
        elem.addClass('remove-from-flow');
      },1000);
      $('#clients').fadeIn(500);
    }
    paperHidden = !paperHidden;
  });

  $('a[data-smooth-scroll]').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });

}); //document ready

