//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var string = require("fs").readFileSync("page.json", "utf8");

suite
.add('use Function', function () {
    var data = (new Function("return " + string))();
})
.add('use JSON.parse', function () {
    var data = JSON.parse(string);
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();