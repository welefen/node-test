//循环体内有function

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var babelCompiled = require('./babel_compiled.js');
var babelCompiled1 = require('./babel_compiled1.js');
var cls = require('./cls.js');


var fn1 = function(){
  var instance = new babelCompiled();
  var data = instance.test();
}

var fn2 = function(){
  var instance = new babelCompiled1();
  var data = instance.test();
}

var fn3 = function(){
  var instance = new cls();
  var data = instance.test();
}


suite.add('babel compiled', function () {
   fn1()
})
.add('babel compiled loose', function () {
   fn2()
})
.add('class', function () {
   fn3()
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });