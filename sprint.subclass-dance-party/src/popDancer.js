var makePopDancer = function (top, left, timeBetweenSteps){
  makeBlinkyDancer.call(this);

}

makePopDancer.prototype = new makeBlinkyDancer();
makePopDancer.prototype.constructor = makeBlinkyDancer;
