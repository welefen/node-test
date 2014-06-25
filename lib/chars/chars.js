var fs = require("fs");

var content = fs.readFileSync("page.html", {
	encoding: "utf-8"
});

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

