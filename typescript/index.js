
var ts = require('typescript');

var code = require('fs').readFileSync('./class.ts', 'utf8');


var diagnostics = [];
var result = ts.transpile(code, {
  module: ts.ModuleKind.CommonJS,
  target: ts.ScriptTarget.ES6
}, 'test.jsx', diagnostics);

var ret = ts.realizeDiagnostics(diagnostics, true)
console.log(result);