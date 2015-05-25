var thinkit = require('thinkit');


class A{
  constructor(){
    console.log('constructor');
  }
  getName(){
    return 'A';
  }
}

class B extends A{
  getName(){
    return super.getName() + 'B';
  }
}

var C = thinkit.Class(B, {
  getName: function(){
    return this.super('getName') + 'C';
  }
})

var D = thinkit.Class(C, {
  getName: function(){
    return this.super('getName') + 'D';
  }
})

class E extends D{
  getName(){
    return super.getName() + 'E'
  }
}
console.log(A.prototype.constructor.prototype.constructor)

// var instance = new E();
// console.log(instance.getName())