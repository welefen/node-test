//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var Class = function(){}
Class.prototype = {
  fn1: function(){
    return 'welefen';
  },
  fn2: function(){
    return this.fn1();
  },
  fn3: function(){
    return Class.static();
  }
}
Class.static = function(){
  return 'welefen';
}

var instance = new Class();


suite
.add('instance static', function () {
    return instance.fn3();
})
.add('instance prototype', function () {
    return instance.fn2();
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();