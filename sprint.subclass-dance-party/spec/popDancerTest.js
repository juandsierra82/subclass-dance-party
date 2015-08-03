describe("popDancer", function() {

  var popDancer;
  var timeBetweenSteps = 100;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    popDancer = popDancer(10, 20, timeBetweenSteps);
  });

  it("should have a jQuery $node object", function(){
    expect(popDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have a step function that makes its node blink", function() {
    sinon.spy(popDancer.$node, 'toggle');
    popDancer.prototype.step();
    expect(popDancer.$node.toggle.called).to.be.true;
  });

  describe("dance", function(){
    it("should call step at least once per second", function(){
      sinon.spy(popDancer, "step");
      expect(popDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(popDancer.prototype.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(popDancer.prototype.step.callCount).to.be.equal(2);
    });
  });
});
