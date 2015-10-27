var fs = require("fs");
var longStr = (new Array(10000)).join("welefen");
while(true){
	fs.writeFileSync("1.txt", longStr);
}