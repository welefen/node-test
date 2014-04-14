//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var obj = {name: "www", value: "www", a: "xxx", b: "xxx"};

var fn = function(name){
  return name;
}

suite
.add('use fn', function () {
   for(var name in obj){
      (function(name){
        return name;
      })(name);
   }
})
.add('use fn 1', function () {
    for(var name in obj){
      fn(name);
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