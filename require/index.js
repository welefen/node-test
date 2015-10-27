//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var t = require('thinkjs');
suite.add('req', function (defer) {
   var thinkjs = t;
}).add('require', function (defer) {
   var thinkjs = require('thinkjs');
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });