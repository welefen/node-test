//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

function _defineProperty(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); }


suite.add('origin', function () {
  var name = 'test';
  var d = {
    welefen: 'suredy'
  }
  d[name] = 'welefen';
})
.add('babel compiled', function (defer) {
var _d;


var name = 'test';
var value = 'test';
var d = (_d = {}, _defineProperty(_d, name, value), _defineProperty(_d, 'welefen', 'suredy'), _d);


})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });