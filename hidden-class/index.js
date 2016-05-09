var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var a = function(x, y){
  this.x = 0;
  this.y = y;
  if(x === 1){
    this.x = x;
  }
}

var b = function(x, y){
  this.x = 0;
  if(x === 1){
    this.x = x;
  }
  this.y = y;
}

var c = function(x, y){
  if(x === 1){
    this.x = x;
  }
  this.y = y;
}



suite.add('hidden class 1', function () {
  var instance = new a(1, 2);
  var instance2 = new a(2, 3);
}).add('hidden class 2', function () {
  var instance = new b(1, 2);
  var instance2 = new b(2, 3);
})
.add('hidden class 3', function () {
  var instance = new c(1, 2);
  var instance2 = new c(2, 3);
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest'));
})
.run({ async: true });