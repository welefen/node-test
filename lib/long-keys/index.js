//使用shift和普通的i++性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var obj1 = {};
var obj2 = {};
var obj3 = {};

for(var i=0;i<10000;i++){
  obj1[i] = Math.random();
  obj2[Math.random()] = Math.random();
  obj3[Math.random() + ':' + Math.random()] = Math.random();
}

suite
.add('short key', function () {
  for(var key in obj1){
    var value = obj1[key];
  }
})
.add('long key', function () {
  for(var key in obj2){
    var value = obj2[key];
  }
})
.add('long long key', function () {
  for(var key in obj3){
    var value = obj3[key];
  }
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });