// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps){


  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  var dancerStyle = makeDancer.prototype.setPosition(top, left);

  this.$node.css(dancerStyle);


  makeDancer.prototype.step(timeBetweenSteps);


  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

};



  makeDancer.prototype.step = function(timeBetweenSteps){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    setTimeout(makeDancer.prototype.step.bind(makeDancer), timeBetweenSteps);
  };

  makeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    return styleSettings;

  };

