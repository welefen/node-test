'use strict';

var _Promise = require('babel-runtime/core-js/promise')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn = function fn() {
  return _Promise.resolve('welefen');
};

var fn1 = function fn1() {
  return fn().then(function () {
    return 111;
  });
};

var fn2 = function fn2() {
  return _regeneratorRuntime.async(function fn2$(context$1$0) {
    while (1) switch (context$1$0.prev = context$1$0.next) {
      case 0:
        context$1$0.next = 2;
        return _regeneratorRuntime.awrap(fn());

      case 2:
        return context$1$0.abrupt('return', 111);

      case 3:
      case 'end':
        return context$1$0.stop();
    }
  }, null, this);
};

suite.add('promise', function (defer) {
  fn1().then(function(){
    defer.resolve();
  });
}, {defer: true});
suite.add('await', function (defer) {
  fn2().then(function(){
    defer.resolve();
  });
}, {defer: true}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
}).run({ async: true });

