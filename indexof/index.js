//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


suite.add('array indexOf', function () {

   var arr = ['POST','PUT','PATCH'];
   var index = arr.indexOf('POST');
   var index = arr.indexOf('PUT');
   var index = arr.indexOf('PATCH');
   var index = arr.indexOf('xx');

}).add('string indexOf', function () {

   var str = 'POST,PUT,PATCH';
   var index = str.indexOf('POST');
   var index = str.indexOf('PUT');
   var index = str.indexOf('PATCH');
   var index = str.indexOf('xx');

}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });