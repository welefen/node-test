//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var oa = {};
var ob = {};

suite
.add('use condition', function () {
  if (!oa.a) {
    oa.a = 1;
  }
  oa.a++;
})
.add('use ++', function () {
    ob.a = ob.a++ || 1;
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();