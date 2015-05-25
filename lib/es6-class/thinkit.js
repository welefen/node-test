var thinkit = require('thinkit');

var A = thinkit.Class({
  init: function(){
    this.name = 'welefen'
  },
  fn: function(){
    return 1;
  }
})
var B = thinkit.Class(A, {
  fn: function(){
    return  this.super('fn') + 1;
  }
})

var C = thinkit.Class(B, {
  fn: function(){
    return this.super('fn') + 1;
  }
})

module.exports = C;