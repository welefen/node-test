//是否使用global.

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var string = "abcdefghigasdgasdgasdgasdg";

suite
.add('use substr', function () {
   var sub = string.substr(0, string.length - 4);
})
.add('use slice', function () {
    var sub = string.slice(0, -4);
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });