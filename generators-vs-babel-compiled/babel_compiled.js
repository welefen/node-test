"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

module.exports = function callee$0$0() {
  var num1, num2;
  return _regeneratorRuntime.async(function callee$0$0$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(_Promise.resolve(1));

      case 2:
        num1 = context$1$0.sent;
        context$1$0.next = 5;
        return _regeneratorRuntime.awrap(_Promise.resolve(2));

      case 5:
        num2 = context$1$0.sent;
        return context$1$0.abrupt("return", num1 + num2);

      case 7:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

