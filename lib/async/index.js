var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var co = require('co');
var Q = require('q');
var gf = require('./gf.js');
var gfc = require('./gf_c.js');
var asyncc = require('./async_c.js');
var _Promise = require("babel-runtime/core-js/promise")["default"];

var fn1 = function(){
  return co(gf);
}
var fn2 = function(){
  return co(gfc);
}
var fn3 = function(){
  return asyncc()
}

var fn4 = function(){
  var value = 0;
  return Promise.resolve(1).then(function(data){
    value += data;
    return Promise.resolve(2);
  }).then(function(data){
    value += data;
    return Promise.resolve(3);
  }).then(function(data){
    value += data;
    return Promise.resolve(4);
  }).then(function(data){
    value += data;
    return Promise.resolve(5);
  }).then(function(data){
    value += data;
    return value;
  })
}

var fn5 = function(){
  var value = 0;
  return _Promise.resolve(1).then(function(data){
    value += data;
    return _Promise.resolve(2);
  }).then(function(data){
    value += data;
    return _Promise.resolve(3);
  }).then(function(data){
    value += data;
    return _Promise.resolve(4);
  }).then(function(data){
    value += data;
    return _Promise.resolve(5);
  }).then(function(data){
    value += data;
    return value;
  })
}
var fn6 = function(){
  return Q.async(gf)();
}



suite.add('gf', function (defer) {
  fn1().then(function(){
    defer.resolve();
  })
}, {
  defer: true
})
.add('gfc, co', function (defer) {
   fn2().then(function(){
    defer.resolve();
  })
}, {
  defer: true
})
.add('gf, Q', function (defer) {
   fn6().then(function(){
    defer.resolve();
  })
}, {
  defer: true
})
.add('async', function (defer) {
   fn3().then(function(){
    defer.resolve();
  })
}, {
  defer: true
})
.add('promise', function (defer) {
   fn4().then(function(){
    defer.resolve();
  })
}, {
  defer: true
})
.add('promise polyfill', function (defer) {
   fn5().then(function(){
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