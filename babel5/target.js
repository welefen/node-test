"use strict";

var _classCallCheck = require("babel-runtime/helpers/class-call-check")["default"];

var _regeneratorRuntime = require("babel-runtime/regenerator")["default"];

var _Promise = require("babel-runtime/core-js/promise")["default"];

var a = (function () {
  function a() {
    _classCallCheck(this, a);
  }

  a.prototype.test = function test() {
    return _regeneratorRuntime.async(function test$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _regeneratorRuntime.awrap(_Promise.resolve(1));

        case 2:
        case "end":
          return context$2$0.stop();
      }
    }, null, this);
  };

  return a;
})();