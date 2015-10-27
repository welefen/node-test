//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn1 = function(obj){
	return Object.keys(obj).map(function(item){
		return obj[item];
	});
}

var fn2 = function(obj){
	var values = [];
	for(var key in obj){
		if (obj.hasOwnProperty(key)) {
			values.push(obj[key])
		}
	}
	return values;
}

suite
.add('use map', function () {
    fn1({name: 1, value: 2})
})
.add('use for', function () {
    fn2({name: 1, value: 2})
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });