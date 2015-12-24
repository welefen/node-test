
function A(x, y){
  this.x = x;
  this.y = y;
}
A.prototype = {
  getName: function(){

  }
}

var a = new A(11, 22);
var b = new A(33, 44);