'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bar = bar;

var _a = require('./a1.js');

function bar() {
  if (Math.random() > 0.5) {
    (0, _a.foo)();
  }
} // b.js

