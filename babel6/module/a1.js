'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.foo = foo;

var _b = require('./b1.js');

function foo() {
  (0, _b.bar)();
  console.log('执行完毕');
}
foo();

