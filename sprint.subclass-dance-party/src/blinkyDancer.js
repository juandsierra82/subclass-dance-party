var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  debugger;
var blinkyDancer = makeDancer.call(this, top, left, timeBetweenSteps);
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
debugger;
  var oldStep = makeDancer.prototype.step;


  blinkyDancer.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    blinkyDancer.$node.toggle();
  };

  return blinkyDancer;
};



makeBlinkyDancer.prototype = new makeDancer(top, left, timeBetweenSteps);
debugger;
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
debugger;
