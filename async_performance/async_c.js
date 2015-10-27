'use strict';

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var fn = function fn() {
  var result;
  return _regeneratorRuntime.async(function fn$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(new _Promise(function (resolve, reject) {
          setTimeout(function () {
            resolve(111);
          }, 10);
        }));

      case 2:
        result = context$1$0.sent;
        return context$1$0.abrupt('return', result);

      case 4:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

for (var i = 0; i < 100000; i++) {
  fn();
}

setInterval(function () {
  var usage = process.memoryUsage();
  console.log('rss', usage.rss, 'heapTotal', usage.heapTotal, 'heapUsed', usage.heapUsed);
}, 1000);

