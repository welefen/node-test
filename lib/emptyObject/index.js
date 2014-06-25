//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn1 = function(obj){
	return Object.keys(obj).length === 0;
}
var fn2 = function(obj){
	for(var name in obj){
		return false;
	}
	return true;
}


suite.add('Object.keys', function () {
   fn1({});
   fn1({name: 'xxx'})
})
.add('for', function (defer) {
   fn2({});
   fn2({name: 'xxx'})
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });