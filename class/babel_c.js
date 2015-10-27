'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var co = require('co');
var A = (function () {
  var _class = function A() {
    _classCallCheck(this, _class);
  };

  return _class;
})();

var B = (function (_A) {
  var _class2 = function B() {
    _classCallCheck(this, _class2);

    if (_A != null) {
      _A.apply(this, arguments);
    }
  };

  _inherits(_class2, _A);

  _class2.prototype.getName = function getName() {};

  return _class2;
})(A);

var C = (function (_B) {
  var _class3 = function C() {
    _classCallCheck(this, _class3);

    if (_B != null) {
      _B.apply(this, arguments);
    }
  };

  _inherits(_class3, _B);

  _class3.prototype.getName = function getName() {};

  return _class3;
})(B);

var instance = new C();

var fn = co.wrap(instance.getName);
fn();

