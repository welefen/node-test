
//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var thinkit = require('thinkit');

var a = function(){

}
a.data = {};
var b = {}

var length = 1000000;

for(var i=0;i<length;i++){
  var rand = Math.random() + '__';
  a.data[rand] = rand;
  b[rand] = rand;
}


suite.add('function data', function () {
  for(var key in a){
    var value = a[key];
  }
})
suite.add('data data', function () {
  for(var key in b){
    var value = b[key];
  }
})
.add('isFile with object', function (defer) {
  isFile2(__dirname + '/index.js')
  isFile2(__dirname + '/index1.js')
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });