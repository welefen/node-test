//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var obj = {};
for(var i=0;i<20;i++){
  var key = 'ww';
  obj[key] = i;
}

suite
.add('use for-in', function () {
  for(var key in obj){
    var value = obj[key];
  }
})
.add('use for', function () {
  var keys = Object.keys(obj);
  for(var i=0,length=keys.length;i<length;i++){
    var value = obj[keys[i]];
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