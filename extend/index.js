var thinkit = require('thinkit');
var lodash = require('lodash');
var microtime = require('microtime');


var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var fn1 = function(){
  var data = thinkit.extend({name: 'welefen'}, {name: 'suredy'}, {value: 1});
  return data;
}

var fn2 = function(){
  var data = lodash.assign({name: 'welefen'}, {name: 'suredy'}, {value: 1})
  return data;
}

suite.add('thinkit extend', function () {
   fn1()
})
.add('lodash assign', function (defer) {
   fn2()
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });