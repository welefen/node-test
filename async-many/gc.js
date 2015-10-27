'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var co = require('co');

var fn = _regeneratorRuntime.mark(function fn() {
  var result;
  return _regeneratorRuntime.wrap(function fn$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return [_Promise.resolve(1), _Promise.resolve(2)];

      case 2:
        result = context$1$0.sent;
        return context$1$0.abrupt('return', result);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, fn, this);
});

co(fn).then(function (data) {
  console.log(data);
})['catch'](function (data) {
  console.log(data);
});

