'use strict';

var thinkit = require('thinkit');

// var A = thinkit.Class({
//   init: function(){
//     console.log('A')
//   }
// });

// var B = class extends A{
//   constructor(...args){
//     super();
//     this.init(...args);
//   }
//   init(){
//     super.init();
//     console.log('B')
//   }
// }

// var C = thinkit.Class(B, {
//   init: function(){
//     this.super('init');
//     console.log('C')
//   }
// })

var D = class{
  constructor(...args){
    this.init(...args);
  }
  init(){
    console.log('D init')
  }
}
var E = class extends D{
  init(){
    super.init();
    console.log('E init')
  }
}

var F = thinkit.Class(E, {
  init: function(){
    this.super('init');
    console.log('F init')
  }
})
var instance = new F();
