//是否使用global.

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var string = "abcdefghigasdgasdgasdgasdg";

suite
.add('use substr', function () {
   var sub = string.substr(0, 1);
})
.add('use [0]', function () {
    var sub = string[0];
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });