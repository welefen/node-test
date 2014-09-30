var fs = require('fs');
var file = 'page.html';
var start = Date.now();
var content = fs.readFileSync(file, "utf8");
var end = Date.now();
console.log(content.length);
console.log(end - start);
