//是否使用global.

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

global.DATA = {name: "welefen"};

for(var i=0;i<100000;i++){
  var name = "w" + Date.now();
  global[name] = name + Math.random();
}

suite
.add('use name', function () {
   var a = DATA.name;
})
.add('use global', function () {
    var a = global.DATA.name;
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });