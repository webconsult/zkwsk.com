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
$(document).foundation();$(document).ready(function(){var e=document.getElementsByTagName("video")[0];setTimeout(function(){$(".logo").fadeIn(200)},500);setTimeout(function(){$(".logo-subtitle").fadeIn(200)},1500);setTimeout(function(){$(".resume-title").fadeIn(200)},2500);var t=function(){$(".logo-container").addClass("opaque");e=$(".header-video");e.get(0).play();e.fadeIn(1200)};setTimeout(function(){t()},3e3);$(".header-video").on("timeupdate",function(){this.currentTime>this.duration-3&&$(this).fadeOut(3e3,function(){$(".logo-container").removeClass("opaque");$(this).hide()})});$(".header-video").get(0).onended=function(){showScroller()};$(".header-video").on("mouseover",function(){showScroller()});$(".header-video").on("mouseout",function(){hideScroller()});showScroller=function(){$(".scroll-down").fadeIn(5e3)};hideScroller=function(){$(".scroll-down").fadeOut(5e3)};$('a[href^="#action_"]').on("click",function(e){e.preventDefault()});var n=!0;$('[href="#paper"').on("click",function(e){var t=$(".paper-container");if(n){$("#clients").fadeOut(500,function(){t.removeClass("remove-from-flow")});t.removeClass("off-canvas")}else{e.preventDefault();t.addClass("off-canvas");setTimeout(function(){t.addClass("remove-from-flow")},1e3);$("#clients").fadeIn(500)}n=!n});$("a[data-smooth-scroll]").click(function(){if(location.pathname.replace(/^\//,"")===this.pathname.replace(/^\//,"")&&location.hostname===this.hostname){var e=$(this.hash);e=e.length?e:$("[name="+this.hash.slice(1)+"]");if(e.length){$("html,body").animate({scrollTop:e.offset().top},500);return!1}}})});