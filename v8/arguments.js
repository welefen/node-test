var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();



function fn1() {
  var args = new Array(arguments.length);
  for(var i = 0; i < args.length; ++i) {
    // i 始终是 arguments 对象的有效索引
    args[i] = arguments[i];
  }
  return args;
}


var fn2 = function(){
  var args = [].slice.call(arguments);
  return args;
}

var slice = [].slice;
var fn3 = function(){
  var args = slice.call(arguments);
  return args;
}


// suite.add('fn1', function () {
//    fn1();
// })
suite.add('use slice', function () {
   fn2('a', 'b', 'c');
})
suite.add('use slice2', function () {
   fn3('a', 'b', 'c');
})
suite.add('use for', function () {
   fn1('a', 'b', 'c');
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });