"use strict";

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

var fn = function fn() {
  var data;
  return _regeneratorRuntime.async(function fn$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(_Promise.resolve(1));

      case 2:
        data = context$1$0.sent;

      case 3:
      case "end":
        return context$1$0.stop();
    }
  }, null, this);
};

