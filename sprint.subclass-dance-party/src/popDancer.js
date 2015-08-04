var PopDancer = function (top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  //debugger;
  console.log(this, top, left);
 // var colorObject = {border:"10px solid blue"}
 //    this.$node.css(colorObject);


  this.setColor();
  // for(var i = 0; i< 100; i++){
  setInterval((this.move.bind(this, top, left)), 3000);
  console.log(this, top, left)
// }

}


PopDancer.prototype = Object.create(BlinkyDancer.prototype)
PopDancer.prototype.constructor = PopDancer;
PopDancer.prototype.setColor = function(){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/


    var colorObject = {border:"10px solid blue"}
    this.$node.css(colorObject);

  };
PopDancer.prototype.move = function(top, left){

top +=20
left+=20
console.log(top, left)
var styles = {
      top: ''+top +'px',
      left: ''+left +'px'
    };
console.log(styles)
 this.$node.css(styles)
}
