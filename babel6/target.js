"use strict";

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (function () {
  function a() {
    (0, _classCallCheck3.default)(this, a);
  }

  a.prototype.test = function test() {
    await _promise2.default.resolve(1);
  };

  return a;
})();