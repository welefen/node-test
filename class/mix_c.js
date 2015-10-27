'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var thinkit = require('thinkit');

var A = (function () {
  var _class = function A() {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, _class);

    this.init.apply(this, args);
  };

  _class.prototype.init = function init() {
    console.log('A init');
  };

  return _class;
})();
var B = thinkit.Class(A, {
  init: function init() {
    this['super']('init');
    console.log('B init');
  }
});

var instance = new B();

