
//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var thinkit = require('thinkit');

var isFile = function(filepath){
  return thinkit.isFile(filepath)
}

var obj = {};
obj[__dirname + '/index.js'] = true;
for(var i=0;i<200;i++){
  var value = Math.random();
  obj[value] = true;
}
var isFile2 = function(filepath){
  return filepath in obj;
}


suite.add('isFile', function () {
   isFile(__dirname + '/index.js')
   isFile(__dirname + '/index1.js')
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