var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn = function(){
  return Promise.resolve('welefen');
}

var fn1 = function(){
  return fn().then(function(){
    return 111;
  })
}

var fn2 = async function(){
  await fn();
  return 111;
}


suite.add('promise', function (done) {
   fn1().then(done)
})
suite.add('await', function (done) {
   fn2().then(done)
})

.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });