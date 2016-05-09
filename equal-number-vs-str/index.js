//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn1 = function(obj){
  return obj === 'stristrdinstrdinstrdinstrdinng';
}

var fn2 = function(obj){
  return obj === 2;
}

suite
.add('use string', function () {
  fn1('strstrdinstrdinstrdinstrdinstrdindin');
})
.add('use number', function () {
  fn2(3);
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').name);
})
.run();