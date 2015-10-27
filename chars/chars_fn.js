var fs = require("fs");
var content = fs.readFileSync("page.html", {encoding: "utf-8"});
console.log(content.length)
function chars(content){
	var length = content.length;
	var pos = 0;
	while(pos ++ < length){
		var chr = content[pos - 1];
	}
}
var start = Date.now();
chars(content);
var end = Date.now();
console.log(end - start);
