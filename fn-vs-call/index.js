//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn = function(name){
  return name;
}

suite
.add('use fn', function () {
   fn('welefen')
})
.add('use fn call', function () {
  fn.call(this, 'welefen')
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });