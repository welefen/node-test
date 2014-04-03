var Benchmark = require('benchmark');
var fs = require("fs");

var content = fs.readFileSync("page.html", {
	encoding: "utf-8"
});

var Chars = function(str){
	this.str = str;
	this.length = str.length
	this.pos = 0;
}
Chars.prototype.run = function(){
	while(this.pos ++ < this.length){
		var chr = this.str[this.pos - 1];
	}
}
var start = Date.now();
var instance = new Chars(content);
instance.run();
var end = Date.now();
console.log(end - start);


// var suite = new Benchmark.Suite;

// // add tests
// suite.add('chars', function() {
// 	var instance = new Chars(content);
// 	//instance.run();
// })
// // add listeners
// .on('cycle', function(event) {
//   console.log(String(event.target));
// })
// .on('complete', function() {
//   console.log('Fastest is ' + this.filter('fastest').pluck('name'));
// })
// // run async
// .run({ 'async': true });



