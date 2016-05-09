var fs = require('fs');
var content = fs.readFileSync('./file.js', 'utf8');

var acorn = require('acorn/dist/acorn.js');

var startTime = Date.now();
var data = acorn.parse(content, {
   ranges: true,
   sourceType: 'module',
   ecmaVersion: 7
});
var endTime = Date.now();
console.log(endTime - startTime);
//console.log(tokens)

