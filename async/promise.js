var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var _Promise = require("babel-runtime/core-js/promise")["default"];


var fn1 = function(){
  var  promises = [];
  for(var i=0;i<100;i++){
    promises.push(Promise.resolve(i));
  }
  return Promise.all(promises);
}
var fn2 = function(){
  var  promises = [];
  for(var  i=0;i<100;i++){
    promises.push(_Promise.resolve(i));
  }
  return _Promise.all(promises);
}


suite.add('Promise', function (defer) {
  fn1().then(function(){
    defer.resolve();
  })
}, {
  defer: true
})
.add('Promise polyfill', function (defer) {
   fn2().then(function(){
    defer.resolve();
  })
}, {
  defer: true
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });