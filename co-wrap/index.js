//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var co = require('co');
var thinkit = require('thinkit');

var coWrap = function(fn, obj, data){
  if (thinkit.isString(fn)) {
    fn = obj[fn];
  }
  return co.wrap(fn).bind(obj)(data);
}

var wrap = function(fn, obj, data){
  if (thinkit.isString(fn)) {
    if (thinkit.isGeneratorFunction(obj[fn])) {
      fn = obj[fn];
      return co.wrap(fn).bind(obj)(data);
    }else{
      return Promise.resolve(obj[fn](data));
    }
  }else{
    if (thinkit.isGeneratorFunction(fn)) {
      return co.wrap(fn).bind(obj)(data);
    }else{
      return Promise.resolve(fn.apply(obj, [data]));
    }
  }
}

var a = function(){
  return 1;
}
var a1 = function*(){
  return yield Promise.resolve(1);
}

var B = {
  name: 111,
  a: function(){
    return this.name;
  },
  a1: function*(){
    return yield Promise.resolve(this.name);
  }
}


suite
.add('use coWrap', function () {
  return Promise.all([
    coWrap(a),
    coWrap(a1),
    coWrap(B.a, B),
    coWrap(B.a1, B),
    coWrap('a', B),
    coWrap('a1', B)
  ])
})
.add('use wrap', function(){
  return Promise.all([
    wrap(a),
    wrap(a1),
    wrap(B.a, B),
    wrap(B.a1, B),
    wrap('a', B),
    wrap('a1', B)
  ])
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();