//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();
var _getIterator = require("babel-runtime/core-js/get-iterator")["default"];


var obj = {};
for(var i=0;i<100;i++){
  var key = Math.random();
  obj[key] = i;
}

var fn1 = function(){
  for(var key in obj){
    var value = obj[key];
  }
}

var fn2 = function(){
  var keys = Object.keys(obj);
  var length = keys.length;
  for(var i=0;i<length;i++){
    var value = obj[keys[i]];
  }
}

// var fn3 = function(){
//   var data = obj;
//   for (var _iterator = data, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _getIterator(_iterator);;) {
//     var _ref;

//     if (_isArray) {
//       if (_i >= _iterator.length) break;
//       _ref = _iterator[_i++];
//     } else {
//       _i = _iterator.next();
//       if (_i.done) break;
//       _ref = _i.value;
//     }

//     var key = _ref;
//   }
// }

// fn3();



// suite
// .add('use for-in', function () {
//   fn1();
// })
// .add('use for', function () {
//   fn2();
// })
// .add('use for of', function () {
//   fn3();
// })
// // add listeners
// .on('cycle', function (event) {
//   console.log(String(event.target));
// })
// .on('complete', function () {
//   console.log('Fastest is ' + this.filter('fastest').pluck('name'));
// })
// .run({ async: true });