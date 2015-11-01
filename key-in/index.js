
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var data = {
  name: '111',
  value: '222'
}
for(var i=0;i<1000;i++){
  var key = 'www' + Math.random();
  data[key] = Math.random();
}

var fn1 = function(){
  var flag = 'name' in data;
  var flag1 = 'xxx' in data;
}

var fn2 = function(){
  var flag, flag1;
  if(data.name){
    flag = true;
  }
  if(data.xxx){
    flag1 = true;
  }
}

var fn3 = function(){
  var flag, flag1;
  if(data.name !== undefined){
    flag = true;
  }
  if(data.xxx !== undefined){
    flag1 = true;
  }
}

var fn4 = function(){
  var keys = Object.keys(data);
  var flag = keys.indexOf('name') > -1;
  var flag1 = keys.indexOf('xxx') > -1;
}


suite
.add('use in', function () {
  fn1();
})
.add('use if', function () {
  fn2();
})
.add('use !=undefined', function () {
  fn3();
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });