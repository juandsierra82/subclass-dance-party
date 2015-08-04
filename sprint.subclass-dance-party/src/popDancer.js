var PopDancer = function (top, left, timeBetweenSteps){
  BlinkyDancer.call(this);
  this._timeBetweenSteps = 10000;
  this.setPosition(top, left)
  this.step()

}


PopDancer.prototype = Object.create(BlinkyDancer.prototype)
PopDancer.prototype.constructor = PopDancer;
