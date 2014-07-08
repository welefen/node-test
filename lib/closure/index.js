//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var a = require('./a.js');
var b = require('./b.js');

suite.add('a', function () {
   require('./a.js')('www')
})
.add('closure', function (defer) {
   require('./b.js')('www')
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });