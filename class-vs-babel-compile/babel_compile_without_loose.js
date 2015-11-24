"use strict";

var _createClass = require("babel-runtime/helpers/create-class")["default"];

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _get = require("babel-runtime/helpers/get")["default"];

var _inherits = require("babel-runtime/helpers/inherits")["default"];

var A = (function () {
  function A() {
    _classCallCheck(this, A);
  }

  _createClass(A, [{
    key: "test",
    value: function test() {
      return 1;
    }
  }]);

  return A;
})();
var B = (function (_A) {
  _inherits(B, _A);

  function B() {
    _classCallCheck(this, B);

    _get(Object.getPrototypeOf(B.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(B, [{
    key: "test",
    value: function test() {
      return _get(Object.getPrototypeOf(B.prototype), "test", this).call(this) + 1;
    }
  }]);

  return B;
})(A);
module.exports = B;

