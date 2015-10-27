
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var filepath = '/Users/welefen/Develop/git/thinkjs/lib/Lib/Core/UserModel.js';
var fn1 = function(){
  var name = filepath.split('/').pop();
  name = name.substr(0, name.length - 8);
  return name;
}
var fn2 = function(){
  var last = filepath.lastIndexOf('/');
  var name = filepath.substr(last + 1, filepath.length - last - 9);
  return name;
}
var fn4 = function(){
  var last = filepath.lastIndexOf('/');
  var name = filepath.slice(last + 1, -8);
  return name;
}
var fn3 = function(){
  var reg = /(\w+)Model/;
  var name = filepath.match(reg);
  return name[1]
}


suite
.add('use split', function () {
  fn1();
})
.add('use indexOf', function () {
  fn2();
})
.add('use reg', function () {
  fn3();
})
.add('use slice', function () {
  fn4();
})

// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });