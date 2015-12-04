var fs = require('fs');
var content = fs.readFileSync('source.js', 'utf8');

var babel = require('babel-core');

var startTime = Date.now();
var data = babel.transform(content, {
  filename: 'file',
  //retainLines: retainLines === undefined ? true : retainLines,
  stage: 0,
  modules: 'common',
  loose: true,
  optional: 'runtime'
});
var endTime = Date.now();

console.log('time', endTime - startTime);

var result = data.code;
fs.writeFileSync('target.js', result);