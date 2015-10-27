//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var str = "IN";

var reg = /^IN$/i;

suite
.add('use str', function () {
    if (str.toUpperCase() === 'IN') {

    };
})
.add('use reg', function () {
    if(reg.test(str)){

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