var fs = require('fs');
var content = fs.readFileSync('source.js', 'utf8');

var babel = require('babel-core');

var startTime = Date.now();
var data = require("babel-core").transform(content, {
  presets: ["es2015-loose", "stage-1"],
  //plugins: ['transform-runtime'],
});
var endTime = Date.now();

console.log('time', endTime - startTime);

var result = data.code;
fs.writeFileSync('target.js', result);