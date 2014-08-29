var ZKWSK = (function(){

//Private properties goes here

//Deprecated - I am not reordering squares at the moment
var relocate_squares = function($el) {
  //move element up one step
  if ($el.not(':first-child')) {
    $el.prev().before($el);
  }
};

//Expands a project square, id is the square number from 0-3
var expand_square = function(id) {
  var squares = $('[class*="project-square-2"]');
  var expand = squares.splice(id, 1);
  $($(expand)).addClass('expanded');
  $(squares).addClass('minimized');
};

//Minimizes any previously expanded square and reveals the remaning squares
var minimize_square = function() {
  $('[class*="project-square-2"].expanded').removeClass('expanded');
  $('[class*="project-square-2"]').removeClass('minimized');
}

var clear_nav = function() {
  $('.nav-timeline').removeClass('dot-home').removeClass('dot-experience').removeClass('dot-projects').removeClass('dot-get-in-touch');
};

//Method to swap array items
Array.prototype.swapItems = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
};

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

  //Fades in the logo
  setTimeout(function(){
    $('.logo').fadeIn(200);
  }, 500);

  // Fades in the logo subtitle
  setTimeout(function(){
    $('.logo-subtitle').fadeIn(200);
  }, 1500);

  //Play video after 3s
  setTimeout(function(){
    playVideo();
  },3000);

  //Makes the logo overlay opaque, starts video playback and fades the video in
  var playVideo = function () {
    $('html.no-touch .logo-container').addClass('opaque');
    var video = $('html.no-touch .header-video');
    video.get(0).play();
    video.removeClass('hidden');
  };

  //Sets up an event to trigger 3 sec before the video ends and starts to fade in profile pic
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
  });
  $('html.no-touch .header-video').on('mouseout',function(){
    hideScroller();
  });

  // Show triangular scroll-button
  var showScroller = function() {
    // $('.scroll-down').removeClass('hide-for-medium-up');
    $('.scroll-down').fadeIn(1000);
  };
  // Hide triangular scroll-button
  var hideScroller = function() {
    // $('.scroll-down').addClass('hide-for-medium-up');
    $('.scroll-down').fadeOut(1000);
  };


  $('a[href^="#action_"]').on('click',function(e){
    e.preventDefault();
  });

  //Deprecated code to hide and show the paper CV
  // var paperHidden = true;
  // $('[href="#paper"]').on('click',function(e){
  //   var elem = $('.paper-container');
  //   if (paperHidden) {
  //     $('#clients').fadeOut(500, function(){
  //       elem.removeClass('remove-from-flow');
  //     });
  //     elem.removeClass('off-canvas');
  //   } else {
  //     e.preventDefault();
  //     elem.addClass('off-canvas');
  //     setTimeout(function(){
  //       elem.addClass('remove-from-flow');
  //     },1000);
  //     $('#clients').fadeIn(500);
  //   }
  //   paperHidden = !paperHidden;
  // });

  //Smooth scrolling
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

  //Activates and deactivates the navigation
  $('section.grey').waypoint(function(direction){
    if (direction === 'down') {
      $('#card').removeClass('flipped');
      setTimeout(function(){
        $('.nav-timeline').addClass('active-home').addClass('dot-home');
      }, 1000);
    } else if (direction === 'up') {
      $('#card').addClass('flipped');
    }
  });

  $('#skills').waypoint(function(direction){
    if (direction === 'down') {
      clear_nav();
      $('.nav-timeline').addClass('active-experience').addClass('dot-experience');
    } else if (direction === 'up') {

      clear_nav();
      $('.nav-timeline').removeClass('active-experience');
      $('.nav-timeline').addClass('dot-home');
    }
  });

  $('#projects').waypoint(function(direction){
    if (direction === 'down') {
      clear_nav();
      $('.nav-timeline').addClass('active-projects').addClass('dot-projects');
    } else if (direction === 'up') {
      clear_nav();
      $('.nav-timeline').removeClass('active-projects');
      $('.nav-timeline').addClass('dot-experience');
    }
  });

  $('#get-in-touch').waypoint(function(direction){
    if (direction === 'down') {
      clear_nav();
      $('.nav-timeline').addClass('active-get-in-touch').addClass('dot-get-in-touch');
    } else if (direction === 'up') {
      clear_nav();
      $('.nav-timeline').removeClass('active-get-in-touch');
      $('.nav-timeline').addClass('dot-projects');
    }
  });



  //Animation of VENN diagram
  $('.venn-diagram').waypoint(function(){
    $('.venn-diagram .container').addClass('animate-circle').addClass('animate-ux').addClass('animate-business').addClass('animate-development');
  }, { offset: '80%' });
  $('.venn-diagram').waypoint(function(){
    $('.venn-diagram .container').addClass('animate-position');
    $('.skill-list').animate({
      opacity: 1,
      top: 0
    },500);
  }, { offset: '30%' });

  $('section.projects [href="#action_close"]').click(function(){
      minimize_square();
    }
  );

}); //document ready


//Public properties goes here
return {
  expand_square: function(id) { expand_square(id); },
  minimize_square: function(id) { minimize_square(); },
  relocate_squares: function($el) { relocate_squares($el); }
};
})();



