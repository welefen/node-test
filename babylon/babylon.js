var fs = require('fs');
var content = fs.readFileSync('./file.js', 'utf8');
var babylon = require('./babylon/lib/index.js');

var startTime = Date.now();
var data = babylon.parse(content, {
  sourceType: "module",
  plugins: [
    // enable experimental async functions
    //"asyncFunctions",

    // enable jsx and flow syntax
    //"jsx",
    //"flow"
  ]
});
var endTime = Date.now();
console.log(endTime - startTime)
console.log(JSON.stringify(data, undefined, 4));
