//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn = function(){

}
var obj = {};

suite
.add('use call', function () {
  fn.call(obj)
})
.add('use apply', function () {
    fn.apply(obj)
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();