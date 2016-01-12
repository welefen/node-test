var tsc = require('typescript-compiler');

var js = tsc.compileString('class TSC { awesome: boolean = true; }');
