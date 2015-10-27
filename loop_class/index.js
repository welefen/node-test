//使用shift和普通的i++性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var string = '';

new Array(10000).join('a').split('').forEach(function(){
  string += Math.random();
})

var think = require('thinkjs-util');

var CLS = think.Class({
  init: function(text){
    this.text = text;
    this.length = this.text.length;
    this.pos = 0;
  },
  next: function(){
    this.pos++;
  },
  while1: function(){
    var chr;
    while(this.pos < this.length){
      chr = this.text[this.pos];
      this.next();
    }
  },
  while2: function(){
    var chr;
    while(true){
      chr = this.text[this.pos];
      if (!chr) {
        break;
      }
      this.next();
    }
  },
  while3: function(){
    var chr, length = this.length;
    while(this.pos < length){
      chr = this.text[this.pos];
      this.next();
    }
  },
  for1: function(){
    var chr;
    for(;chr = this.text[this.pos];){
      this.next();
    }
  },
  for2: function(){
    var chr;
    for(;this.pos < this.length;){
      chr = this.text[this.pos];
      this.next();
    }
  }
})

var instance1 = CLS(string);
var instance2 = CLS(string);
var instance3 = CLS(string);
var instance4 = CLS(string);
var instance5 = CLS(string);

suite
.add('while <', function () {
  instance1.while1();
})
.add('while true', function () {
  instance2.while2();
})
.add('while 3', function () {
  instance3.while3();
})
.add('for', function () {
  instance4.for1();
})
.add('for <', function () {
  instance5.for2();
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });