//循环体内有function

'use strict';

var _Set = require('babel-runtime/core-js/set')['default'];

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var thinkit = require('thinkit');
var Immutable = require('immutable');

var obj = [];
for (var i = 0; i < 100; i++) {
  var key = Math.random();
  obj.push({
    a: 1,
    b: true,
    c: 'string',
    d: ['welefen'],
    e: function e() {}
  });
}
var obj1 = new _Set(obj);

obj1.set(1, 'welefen');

var arr = [3, 5, 2, 2, 5, 5];
var unique = [].concat(new _Set(arr));

console.log(unique)

// suite.add('thinkit.extend', function () {

//   var obj2 = thinkit.extend({}, obj, {
//     a: 10
//   });

// }).add('immutable', function () {
//   var map1 = Immutable.List(obj);
//   var map2 = map1.set('a', 10);
// }).on('cycle', function (event) {
//   console.log(String(event.target));
// }).on('complete', function () {
//   console.log('Fastest is ' + this.filter('fastest').pluck('name'));
// })
// .run({ async: true });

