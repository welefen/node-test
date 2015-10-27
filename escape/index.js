


//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn1 = function(str){
  return str.replace(/[\0\n\r\b\t\\\'\"\x1a]/g, function(s) {
    switch(s) {
      case '\0': 
        return '\\0';
      case '\n': 
        return '\\n';
      case '\r': 
        return '\\r';
      case '\b': 
        return '\\b';
      case '\t': 
        return '\\t';
      case '\x1a': 
        return '\\Z';
      default:   
        return '\\'+s;
    }
  });
}
var escape = {
  '\0': '\\0',
  '\n': '\\n',
  '\r': '\\r',
  '\b': '\\b',
  '\t': '\\t',
  '\x1a': '\\Z',
}
var fn2 = function(str){
  return str.replace(/[\0\n\r\b\t\\\'\"\x1a]/g, function(s) {
    return escape[s] || ('\\' + s);
  });
}

suite.add('fn1', function () {
   fn1('fasdf"  ')
})
.add('fn2', function (defer) {
   fn2('fasdf"  ')
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });