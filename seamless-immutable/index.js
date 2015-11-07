//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var think = require('thinkit');
var immutable = require('seamless-immutable');

var obj1 = {};
var obj2 = {name: 2, data: 2, value: {name: 1, test: [1,2,3]}};

var fn1 = function(){
  return think.extend(obj1, obj2);
}
var fn2 = function(){
  return immutable(obj1).merge(obj2);
}

suite.add('think.extend', function (defer) {
   fn1()
}).add('immutable', function (defer) {
   fn2();
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });