var PopDancer = function (top, left, timeBetweenSteps){
  BlinkyDancer.call(this);


}

PopDancer.prototype = new BlinkyDancer();
PopDancer.prototype.constructor = BlinkyDancer;
PopDancer.prototype.step = function (){
  oldStep();

}
