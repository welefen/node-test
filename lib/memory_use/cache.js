var util = require('util');

var start = process.memoryUsage();
var cache = {};
var i =0;
while(i++ < 100000){
	cache[i+""] = {time: Date.now(), random: Math.random()};
}
var end = process.memoryUsage();
console.log("rss", end.rss - start.rss);
console.log("heapTotal", end.heapTotal - start.heapTotal);
console.log("heapUsed", end.heapUsed - start.heapUsed);

setInterval(function(){
	console.log("");
	var end = process.memoryUsage();
	console.log("rss", end.rss - start.rss);
	console.log("heapTotal", end.heapTotal - start.heapTotal);
	console.log("heapUsed", end.heapUsed - start.heapUsed);
}, 1000)