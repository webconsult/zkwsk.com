// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){

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
  },5000);

});

playVideo = function () {
  video = $('.header-video');
  video.get(0).play();
  video.fadeIn(1200);
}

/* 
 * Lazy Line Painter - Path Object 
 * Generated using 'SVG to Lazy Line Converter'
 * 
 * http://lazylinepainter.info 
 * Copyright 2013, Cam O'Connell  
 *  
 */ 
 
var pathObj = {
    "bg_top": {
        "strokepath": [
            {
                "path": "M 480.115 319.975 L 800 0.353",
                "duration": 600
            },
            {
                "path": "M 479.115 318.975 L 802.154 642.347",
                "duration": 600
            },
            {
                "path": "M 1120 0.353 L 1440 319.975",
                "duration": 600
            },
            {
                "path": "M 1440 319.975 L 1120 642.347",
                "duration": 600
            },
            {
                "path": "M 159.5 159.853 L 0 0.353",
                "duration": 600
            },
            {
                "path": "M 320 160.164 L 480 -0.647",
                "duration": 600
            },
            {
                "path": "M 159.5 480.354 L 320 640.854",
                "duration": 600
            },
            {
                "path": "M 1600 160.353 L 1760.02 -0.127",
                "duration": 600
            },
            {
                "path": "M 1760 320.353 L 1920 479.854",
                "duration": 600
            },
            {
                "path": "M 1439.5 640.354 L 1600.5 479.854",
                "duration": 600
            },
            {
                "path": "M 159.5 0 L 159.5 640",
                "duration": 600
            },
            {
                "path": "M 319.5 -1 L 319.5 640",
                "duration": 600
            },
            {
                "path": "M 479.5 -1 L 479.5 640",
                "duration": 600
            },
            {
                "path": "M 640.058 0.353 L 640 159.853",
                "duration": 600
            },
            {
                "path": "M 640 479.854 L 640.058 640.854",
                "duration": 600
            },
            {
                "path": "M 1279.5 -1 L 1279.5 160",
                "duration": 600
            },
            {
                "path": "M 1279.5 479.854 L 1280 640.354",
                "duration": 600
            },
            {
                "path": "M 1439.5 0 L 1439.5 640",
                "duration": 600
            },
            {
                "path": "M 1599.5 -1 L 1599.5 640",
                "duration": 600
            },
            {
                "path": "M 1759.5 -1 L 1759.5 640",
                "duration": 600
            }
        ],
        "dimensions": {
            "width": 1920,
            "height": 640
        }
    }
}; 
 
 
/* 
 Setup and Paint your lazyline! 
 */ 
 
 $(document).ready(function(){ 

 $('#bg_top').lazylinepainter( 
 {
    "svgData": pathObj,
    "strokeWidth": 1,
    "strokeColor": "#fff"
}).lazylinepainter('paint'); 
 });

