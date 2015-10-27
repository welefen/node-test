var fs = require("fs");
var times = 0;
var errTimes = 0;
var fd = fs.openSync("1.txt", 1, 438 /*=0666*/);
setInterval(function(){
	times++;
	var size = fs.fstatSync(fd).size;
	if (!size) {
		console.log(size);
		errTimes++;
	};
	//console.log("error rate:", errTimes/times);
}, 0)