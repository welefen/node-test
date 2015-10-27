//循环体内有function

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var thinkit = require('./thinkit.js');
var babelCompiled = require('./babel_compiled.js');
var CLS = require('./cls.js')


var fn1 = function(){
  var instance = new CLS();
  var data = instance.fn();
}

var fn2 = function(){
  var instance = thinkit();
  var data = instance.fn();
}

var fn3 = function(){
  var instance = new babelCompiled();
  var data = instance.fn();
}


suite.add('node class', function () {
   fn1()
})
.add('thinkit', function () {
   fn2()
})
.add('babel compiled', function () {
   fn3()
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });