var thinkit = require('thinkit');

var A = class{
  constructor(...args){
    this.init(...args);
  }
  init(){
    console.log('A init');
  }
}
var B = thinkit.Class(A, {
  init: function(){
    this.super('init');
    console.log('B init');
  }
})

var C = class extends A{
  constructor(http){
    super(http);
  }
}

var instance = new B();
