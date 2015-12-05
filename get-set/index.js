//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var a = function(){
  this._cookie = '';
}
a.prototype.cookie = function(value){
  if(value !== undefined){
    return this._cookie = value;
  }
  return this._cookie;
}

var b = function(){
  this._cookie = '';
}
Object.defineProperty(b.prototype, 'cookie', {
  get: function(){
    return this._cookie;
  },
  set: function(value){
    this._cookie = value;
  }
})


suite.add('get, set', function () {
  var instance = new a();
  instance.cookie('welefen');
  var value = instance.cookie();
}).add('defineProperty', function () {

  var instance = new b();
  instance.cookie = 'welefen';
  var value = instance.cookie;
}).on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });