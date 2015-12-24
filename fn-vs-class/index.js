
var fn = function(){
  return 1;
}

var cls = function(){
  this.value = 1;
}
cls.prototype.getValue = function(){
  return this.value;
}

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn = function(name){
  return name;
}

suite
.add('use fn', function () {
   fn()
})
.add('use class', function () {
  var instance = new cls();
  instance.getValue();
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });