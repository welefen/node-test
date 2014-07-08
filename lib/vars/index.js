//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn1 = function(){
  return 'welefen';
}
var name = 'welefen'
var fn2 = function(){
  return name;
}
suite
.add('fn1', function () {
    fn1();
})
.add('fn2', function () {
    fn2();
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });