'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

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

var D = (function () {
  var _class = function D() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, _class);

    this.init.apply(this, args);
  };

  _class.prototype.init = function init() {
    console.log('D init');
  };

  return _class;
})();
var E = (function (_D) {
  var _class2 = function E() {
    _classCallCheck(this, _class2);

    if (_D != null) {
      _D.apply(this, arguments);
    }
  };

  _inherits(_class2, _D);

  _class2.prototype.init = function init() {
    _D.prototype.init.call(this);
    console.log('E init');
  };

  return _class2;
})(D);

var F = thinkit.Class(E, {
  init: function init() {
    this['super']('init');
    console.log('F init');
  }
});
var instance = new F();

