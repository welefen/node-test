'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

exports.__esModule = true;

var a = (function () {
  function a() {
    _classCallCheck(this, a);
  }

  a.prototype.test = function test() {
    var value;
    return _regeneratorRuntime.async(function test$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(_Promise.resolve(1));

        case 2:
          value = context$2$0.sent;
          context$2$0.next = 5;
          return _regeneratorRuntime.awrap(_Promise.reject(new Error('error')));

        case 5:
          return context$2$0.abrupt('return', value);

        case 6:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  };

  a.test = function test() {};

  return a;
})();
var instance = new a();
instance.test().then(function (data) {
  console.log('data', data);
});
var b = (function (_a) {
  _inherits(b, _a);

  function b() {
    _classCallCheck(this, b);

    _a.apply(this, arguments);
  }

  b.prototype.test = function test() {
    return _regeneratorRuntime.async(function test$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(_a.prototype.test.call(this));

        case 2:
          context$2$0.next = 4;
          return _regeneratorRuntime.awrap(_Promise.resolve(2));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  };

  return b;
})(a);

exports['default'] = b;
module.exports = exports['default'];