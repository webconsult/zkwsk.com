var video;

// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

  video = document.getElementsByTagName('video')[0];

  $('.logo').hide();
  $('.resume-title').hide();
  $('.logo-subtitle').hide();

  setTimeout(function(){
    $('.logo').fadeIn(200);
  }, 500);

  setTimeout(function(){
    $('.logo-subtitle').fadeIn(200);
  }, 1500);

  setTimeout(function(){
    $('.resume-title').fadeIn(200);
  }, 2500);

  setTimeout(function(){
    playVideo();
  },3000);

  $( '.header-video' ).on('timeupdate', function(event){
    if( this.currentTime > ( this.duration - 3 ) ) {
      // $( '.header-video' ).get(0).fadeOut(3000);
      $(this).fadeOut(3000, function(){
        $('.logo-container').removeClass('opaque');
      });
    }
  });
});

playVideo = function () {
  $('.logo-container').addClass('opaque');
  video = $('.header-video');
  video.get(0).play();
  video.fadeIn(1200);
}