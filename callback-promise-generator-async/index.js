
'use strict';

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var callback = require('./callback.js');
var promise = require('./promise.js');
var generator = require('./generator.js');

// callback(function(data){
//   console.log(data);
// })

suite.add('callback', function (defer) {
  callback(function(){
    defer.resolve();
  })
}, {defer: true, async:true});

suite.add('promise', function (defer) {
  promise().then(function(){
    defer.resolve();
  });
}, {defer: true, async:true});

suite.add('generator', function (defer) {
  generator().then(function(){
    defer.resolve();
  });
}, {defer: true, async:true});

suite.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
}).run({ async: true });

