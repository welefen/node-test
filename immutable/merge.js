//循环体内有function

var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var thinkit = require('thinkit');
var Immutable = require('immutable');


var obj1 = {a: 1, b: 2,e: [1, 2, 3]};
var obj2 = {c: 3, d: {a: 1}};


var thinkMerge = function(){
  return thinkit.extend({}, obj1, obj2);
}

var ImmutableMerge = function(){
  var i1 = Immutable.fromJS(obj1);
  //console.log(i1.mergeDeep(obj2))
  return i1.mergeDeep(obj2);
}

// ImmutableMerge();

suite.add('think.merge', function () {

  thinkMerge()

}).add('immutable.merge', function () {
  ImmutableMerge()
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });