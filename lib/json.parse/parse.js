var fs = require("fs");
var file = "page.json";
var start = Date.now();
var content = fs.readFileSync(file, {
	encoding: "utf8"
});

var data = JSON.parse(content)
var end = Date.now();
console.log(end - start)
