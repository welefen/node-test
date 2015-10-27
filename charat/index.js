var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var string = (new Array(10000)).join(Math.random() + '');
var length = string.length

var s1 = function(){
  for(var i=0;i<length;i++){
    var code = string.charCodeAt(i);
    if (code === 0x30) {

    };
  }
}
var s2 = function(){
  for(var i=0;i<length;i++){
    var chr = string[i];
    if (chr === '0') {

    };
  }
}
var s3 = function(){
  for(var i=0;i<length;i++){
    var code = string.charCodeAt(i);
    if (code === 48) {

    };
  }
}
var s4 = function(){
  for(var i=0;i<length;i++){
    var chr = string.charAt(i);
    if (chr.charCodeAt(0) === 48) {

    };
  }
}
suite.add('charCodeAt hex', function () {
   s1();
})
suite.add('charCodeAt', function () {
   s3();
})
suite.add('charCodeAt 4', function () {
   s3();
}).add('[i]', function (defer) {
   s2();
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });