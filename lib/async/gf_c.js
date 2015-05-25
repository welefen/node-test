"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

module.exports = _regeneratorRuntime.mark(function callee$0$0() {
  var value;
  return _regeneratorRuntime.wrap(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _Promise.resolve(1);

      case 2:
        value = context$1$0.sent;
        context$1$0.next = 5;
        return _Promise.resolve(2);

      case 5:
        value += context$1$0.sent;
        context$1$0.next = 8;
        return _Promise.resolve(3);

      case 8:
        value += context$1$0.sent;
        context$1$0.next = 11;
        return _Promise.resolve(4);

      case 11:
        value += context$1$0.sent;
        context$1$0.next = 14;
        return _Promise.resolve(5);

      case 14:
        value += context$1$0.sent;
        return context$1$0.abrupt("return", value);

      case 16:
      case "end":
        return context$1$0.stop();
    }
  }, callee$0$0, this);
});

