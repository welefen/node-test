'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var co = require('co');

var Test = (function () {
  function Test(message) {
    _classCallCheck(this, Test);

    this.message = message;
  }

  Test.prototype.run = function run(message) {
    return _regeneratorRuntime.async(function run$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          if (!this.message) {
            context$2$0.next = 3;
            break;
          }

          context$2$0.next = 3;
          return _regeneratorRuntime.awrap(_Promise.resolve(1111));

        case 3:
          return context$2$0.abrupt('return', _Promise.reject(new Error(this.message + message)));

        case 4:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  };

  return Test;
})();

var b = function b() {
  var instance = new Test('....');
  return instance.run('welefen test');
};
var a = function a() {
  var i;
  return _regeneratorRuntime.async(function a$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        i = 0;

      case 1:
        if (!(i < 10)) {
          context$1$0.next = 7;
          break;
        }

        context$1$0.next = 4;
        return _regeneratorRuntime.awrap(b());

      case 4:
        i++;
        context$1$0.next = 1;
        break;

      case 7:
        console.log(1111);
        return context$1$0.abrupt('return', 1);

      case 9:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

var c = function c() {
  return _regeneratorRuntime.async(function c$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(a());

      case 2:
        console.log(2222);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

c();;

