//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fs = require("fs");

var cache = {};

var fileContent = fs.readFileSync("1.html", {
  encoding: "utf8"
});

cache.key = fileContent;



suite.add('cache', function () {
   var content = cache.key;
}).add('file', function (defer) {
   var fileContent = fs.readFileSync("1.html", {
    encoding: "utf8"
  });
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });