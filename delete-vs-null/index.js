//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var oa = {};
var ob = {};
var oc = {};
var od = {};

suite
.add('use delete', function () {
  if (!oa.a) {
    oa.a = 1;
  }else{
    delete oa.a;
  }
})
.add('use null', function () {
    if (!ob.a) {
      ob.a = 1;
    }else{
      ob.a = null;
    }
})
.add('use undefined', function () {
    if (!oc.a) {
      oc.a = 1;
    }else{
      oc.a = undefined;
    }
})
.add('use ""', function () {
    if (!oc.a) {
      oc.a = 1;
    }else{
      oc.a = '';
    }
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();