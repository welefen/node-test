//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var userInfo = {score: 100, name: 'welefen', 'value': 'xxx'};

var condition = 'userInfo.score > 10';
var fn1 = function(obj){
  var fn = new Function('userInfo', 'return ' + condition);
  var flag = fn(userInfo);
  //console.log('new Function', flag);
}
var vm = require('vm');
var fn2 = function(obj){
  var flag = vm.runInNewContext(condition, {userInfo: userInfo});
  //console.log('runInNewContext', flag)
}

// fn1();
// fn2();

suite.add('new Function', function () {
   fn1();
})
.add('runInNewContext', function (defer) {
  fn2();
})// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });