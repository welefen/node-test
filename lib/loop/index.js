//使用shift和普通的i++性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var string = '';

new Array(10000).join('a').split('').forEach(function(){
  string += Math.random();
})


suite
.add('while <', function () {
  var length = string.length;
  var i = 0, chr;
  while( i < length){
    chr = string[i++];
  }
})
.add('while true', function () {
  var i = 0, chr;
  while( true){
    chr = string[i++];
    if (!chr) {
      break;
    }
  }
})
.add('for', function () {
  var i = 0, chr;
  for(;chr = string[i++];){

  }
})
.add('for <', function () {
  var i = 0, chr;
  var length = string.length;
  for(;i < length;){
    chr = string[i++];
  }
})
.add('for < 1', function () {
  var  chr;
  var length = string.length;
  for(var i =0;i < length;i++){
    chr = string[i];
  }
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });