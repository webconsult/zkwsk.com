var venn = (function(){

  //Private properties goes here
  var canvas = document.getElementById('venn');
  var parent = canvas.parentNode;
  var context = canvas.getContext('2d');
  var grid_subdivisions_x = 12;
  var grid_subdivisions_y = 6;
  var frame_length = 30; //ms


  var draw_circle = function(pos_x, pos_y, radius, stroke) {
    context.beginPath();
    context.arc(pos_x, pos_y, radius, 0, Math.PI*2, true); //context.arc(x, y, radius, startAngle, endAngle, counterClockwise);
    context.closePath();
    context.strokeStyle = stroke;
    context.stroke();
  };
  var draw_line = function(start_x, start_y, end_x, end_y, stroke) {
    context.beginPath();
    context.moveTo(start_x,start_y);
    context.lineTo(end_x, end_y);
    context.strokeStyle = stroke;
    context.stroke();
  };
  var anim_line = function(start_x, start_y, end_x, end_y, stroke, speed) {
    start_x = hor(start_x);
    start_y = hor(start_y);
    end_x = hor(end_x);
    end_y = hor(end_y);

    var position = 0;

    //If no speed is supplied default is set to 1/30th of a second.
    //speed ||= 0.0333333;
    if (speed > 1) { speed = 1; }

    setInterval(function(){
      position += speed;
      context.strokeStyle = stroke;
      context.moveTo(start_x, start_y);
      context.lineTo(start_x + (end_x - start_x) * position, start_y + (end_y - start_y) * position);
      context.stroke();
    }, frame_length);

  };


  $(window).resize(function(){
    init();
  });

  var init = function () {
    //Adjust canvas on start and resize
    canvas.width = (parent.clientWidth);
    canvas.height = (parent.clientWidth * 0.5);
    //draw_circle(canvas.width/2,canvas.height/2,canvas.width / 3, "rgba(85,98,112,1)");
    //draw_line(hor(1), ver(1), hor(11), ver(5), "rgba(85,98,112,1)");

  };

  var hor = function (steps) {
    return (canvas.width / grid_subdivisions_x) * steps;
  };
  var ver = function (steps) {
    return (canvas.height / grid_subdivisions_y) * steps;
  };

  //init();

  //Public properties goes here
  return {
    init: function(){
      init();
    },
    hor: function(steps){
      return hor(steps);
    },
    ver: function(steps){
      return ver(steps);
    },
    draw_circle: function(pos_x, pos_y, radius, stroke){
      draw_circle(pos_x, pos_y, radius, stroke);
    },
    anim_line: function(start_x, start_y, end_x, end_y, stroke, speed) {
      anim_line(start_x, start_y, end_x, end_y, stroke, speed);
    }
  };
})();