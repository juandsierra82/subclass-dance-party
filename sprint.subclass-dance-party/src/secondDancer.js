var SecondDancer = function (top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  //debugger;
  console.log(this, top, left);
 // var colorObject = {border:"10px solid blue"}
 //    this.$node.css(colorObject);


  this.setColor();
  // for(var i = 0; i< 100; i++){
  setInterval(this.move.bind(this, top, left), 3000);
  console.log(this, top, left)
// }

}


SecondDancer.prototype = Object.create(Dancer.prototype)
SecondDancer.prototype.constructor = SecondDancer;
SecondDancer.prototype.setColor = function(){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/


    var colorObject = {border:"10px solid green"}
    this.$node.css(colorObject);

  };
// SecondDancer.prototype.move = function(top, left){
// var styles ={
//   'left': '+=50'
// }

//  this.$node.animate(styles, 'slow')

// }
