'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var marked0$0 = [getValue].map(_regeneratorRuntime.mark);
var co = require('co');

function getValue() {
  return _regeneratorRuntime.wrap(function getValue$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _Promise.resolve(1);

      case 2:
        return context$1$0.abrupt('return', context$1$0.sent);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, marked0$0[0], this);
}

co(getValue).then(function (data) {});

