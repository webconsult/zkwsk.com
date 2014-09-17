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
};

var clear_nav = function() {
  $('.nav-timeline').removeClass('dot-home').removeClass('dot-experience').removeClass('dot-projects').removeClass('dot-get-in-touch');
};

//Method to swap array items
Array.prototype.swapItems = function(a, b){
    this[a] = this.splice(b, 1, this[a])[0];
    return this;
};


//Angular Stuff goes here

var app = angular.module('zkwsk-module', []).filter('slice', function() {
  return function(arr, start, end) {
    return arr.slice(start, end);
  };
});



app.controller('SkillsController', ['$scope', function($scope){
  $scope.skills =
    { development: [
        { name: '.NET', level: 1, priority: 100 },
        { name: 'Amazon Web Services', level: 1, priority: 100 },
        { name: 'AngularJS', level: 1, priority: 100 },
        { name: 'Bash', level: 1, priority: 100 },
        { name: 'C#', level: 1, priority: 100 },
        { name: 'CakePHP', level: 1, priority: 100 },
        { name: 'CSS Animations', level: 1, priority: 100 },
        { name: 'CSS3', level: 1, priority: 2 },
        { name: 'Drupal', level: 1, priority: 100 },
        { name: 'Graceful Degradation', level: 1, priority: 100 },
        { name: 'Progressive Enhancement', level: 1, priority: 100 },
        { name: 'Heroku', level: 1, priority: 100 },
        { name: 'HTML5', level: 1, priority: 1 },
        { name: 'Java', level: 1, priority: 100 },
        { name: 'Javascript', level: 1, priority: 3 },
        { name: 'Joomla', level: 1, priority: 100 },
        { name: 'jQuery', level: 1, priority: 100 },
        { name: 'LESS', level: 1, priority: 100 },
        { name: 'Linux', level: 1, priority: 100 },
        { name: 'Meteor', level: 1, priority: 100 },
        { name: 'MongoDB', level: 1, priority: 100 },
        { name: 'MVC', level: 1, priority: 100 },
        { name: 'MySQL', level: 1, priority: 100 },
        { name: 'PHP', level: 1, priority: 5 },
        { name: 'Razor', level: 1, priority: 100 },
        { name: 'Responsive Web Design', level: 1, priority: 100 },
        { name: 'Ruby On Rails', level: 1, priority: 4 },
        { name: 'SASS', level: 1, priority: 100 },
        { name: 'SVG Animations', level: 1, priority: 100 },
        { name: 'Twitter Bootstrap', level: 1, priority: 100 },
        { name: 'Vagrant Up', level: 1, priority: 100 },
        { name: 'Wordpress', level: 1, priority: 100 },
        { name: 'ZSH', level: 1, priority: 100 },
        { name: 'ZURB Foundation', level: 1, priority: 100 }
      ],
      design: [
        { name: 'Adobe Illustrator', level: 1, priority: 100 },
        { name: 'Adobe Photoshop', level: 1, priority: 100 },
        { name: 'Cognition', level: 1, priority: 100 },
        { name: 'Context-aware Design', level: 1, priority: 100 },
        { name: 'Design Patterns (Android)', level: 1, priority: 100 },
        { name: 'Design Patterns (iOS)', level: 1, priority: 100 },
        { name: 'Design Patterns (web)', level: 1, priority: 100 },
        { name: 'Design Thinking', level: 1, priority: 100 },
        { name: 'Information Architecture', level: 1, priority: 2 },
        { name: 'Mental Models', level: 1, priority: 100 },
        { name: 'Personas', level: 1, priority: 100 },
        { name: 'Persuasive Technology', level: 1, priority: 100 },
        { name: 'Prototyping', level: 1, priority: 100 },
        { name: 'Scenarios', level: 1, priority: 100 },
        { name: 'Usability', level: 1, priority: 100 },
        { name: 'Usability Testing', level: 1, priority: 3 },
        { name: 'User Research', level: 1, priority: 1 },
        { name: 'Video Editing', level: 1, priority: 100 },
        { name: 'Visual Design', level: 1, priority: 5 },
        { name: 'Wireframing', level: 1, priority: 4 }
      ],
      management: [
        { name: 'Accounting', level: 1, priority: 100 },
        { name: 'Agile', level: 1, priority: 1 },
        { name: 'Business Model Canvas', level: 1, priority: 100 },
        { name: 'Business Process Modelling', level: 1, priority: 100 },
        { name: 'E-commerce', level: 1, priority: 7 },
        { name: 'Internet Business Models', level: 1, priority: 4 },
        { name: 'Kanban', level: 1, priority: 100 },
        { name: 'Knowledge Management', level: 1, priority: 100 },
        { name: 'LEAN', level: 1, priority: 100 },
        { name: 'LEAN Startup', level: 1, priority: 3 },
        { name: 'Marketing', level: 1, priority: 6 },
        { name: 'Podio', level: 1, priority: 100 },
        { name: 'Product Management', level: 1, priority: 100 },
        { name: 'SCRUM', level: 1, priority: 2 },
        { name: 'Strategy', level: 1, priority: 5 }
      ]
    };


  $scope.columns = {
    development: [],
    design: [],
    management: []
  };

  $scope.columnCount = 3;


  function calculateColumns(listLength, columnsArray) {

    debugger;

    //Determines whether to use a 1, 2 or 3 column layout based on listLength
    if (listLength <= 5) {
      $scope.columnCount = 1;
    }
    else if (5 < listLength && listLength <= 10) {
      $scope.columnCount = 2;
    } else if (10 < listLength) {
      $scope.columnCount = 3;
    }

    var itemsPerColumn = Math.ceil(listLength / $scope.columnCount);

    //Populates the column array
    for (var i=0; i<listLength; i += itemsPerColumn) {
      var col = { start: i, end: Math.min(i + itemsPerColumn, listLength) };
      columnsArray.push(col);
    }
  }

  calculateColumns($scope.skills.development.length, $scope.columns.development);
  calculateColumns($scope.skills.design.length, $scope.columns.design);
  calculateColumns($scope.skills.management.length, $scope.columns.management);

}]);

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
  if (!Modernizr.touch) {
    $( 'html.no-touch .header-video' ).on('timeupdate', function(){
      if( this.currentTime > ( this.duration - 3 ) ) {
        // $( 'html.no-touch .header-video' ).get(0).fadeOut(3000);
        $('.header-profile-pic').fadeIn(3000);
        //$('.logo-container').addClass('profile-pic-shown');
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
  }


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
          scrollTop: target.offset().top + 3 //3px offset needed to align trigger menu
        }, 500);
        return false;
      }
    }
  });

  //Activates and deactivates the navigation
  if (!Modernizr.touch) {
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
    },{ offset: 'bottom-in-view'});

  }



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

  $('a[href^="#action_"]').on('click',function(e){
    e.preventDefault();
  });

  $('.keywords li a[href^="#"]').on('click',function(e){
    e.preventDefault();
  });

  $('section.projects [href="#action_close"]').click(function(){
      minimize_square();
    }
  );

  $('section.skills [href="#action_show_all_development_skills"]').click(function(){
    $('.select-skills').hide();
    $('.all-skills.development').fadeIn(500);
  });

  $('section.skills [href="#action_show_all_design_skills"]').click(function(){
    $('.select-skills').hide();
    $('.all-skills.design').fadeIn(500);
  });

  $('section.skills [href="#action_show_all_management_skills"]').click(function(){
    $('.select-skills').hide();
    $('.all-skills.management').fadeIn(500);
  });

  $('section.skills [href="#action_hide_skill_details"]').click(function(){
    $('.all-skills').hide();
    $('.select-skills').fadeIn(500);
  });

}); //document ready


//Public properties goes here
return {
  expand_square: function(id) { expand_square(id); },
  minimize_square: function() { minimize_square(); },
  relocate_squares: function($el) { relocate_squares($el); }
};
})();
