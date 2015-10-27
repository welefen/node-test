//循环体内有function

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var thinkit = require('thinkit');
var Immutable = require('immutable');

var obj = {};
for(var i=0;i<100;i++){
  var key = Math.random();
  obj[key] = {
    a: 1
  };
}


suite.add('thinkit.extend', function () {

  var obj2 = thinkit.extend({}, obj, {
    a: 10
  });

}).add('immutable', function () {
  var map1 = Immutable.Map(obj);
  var map2 = map1.set('a', 10);
}).add('stringify', function () {
  var data = JSON.parse(JSON.stringify(obj));
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });