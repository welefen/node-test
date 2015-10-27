var content = require('fs').readFileSync('page.html', 'utf8');
var start = Date.now();
content = content.toLowerCase();
var end = Date.now();
console.log(content.length)
console.log(end - start)