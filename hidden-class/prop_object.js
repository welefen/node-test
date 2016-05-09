var cls = function(){
  this.prop = {};
}

var a = new cls();
a.prop.a = 1;

var b = new cls();
b.prop.b = 'test';


console.log(%HaveSameMap( a, b ));