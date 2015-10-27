var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();


var arr = [];
for(var i=0;i<10000;i++){
  var random = Math.random();
  if (random >= 0.7) {
    arr.push(1);
  }else if (random >= 0.3) {
    arr.push(function(){
      throw new Error();
    })
  }else{
    arr.push(function(){})
  }
}

var fn1 = function(){
  for(var i=0;i<arr.length;i++){
    if (typeof arr[i] === 'function') {
      arr[i]();
    }
  }
}
var fn2 = function(){
  for(var i=0;i<arr.length;i++){
    try{
      arr[i]();
    }catch(e){}
  }
}

var fn3 = function(){
  for(var i=0;i<arr.length;i++){
    if (typeof arr[i] === 'function') {
      try{
        arr[i]();
      }catch(e){}
    }
  }
}

// suite.add('fn1', function () {
//    fn1();
// })
suite.add('fn2', function () {
   fn2();
})
suite.add('fn3', function () {
   fn3();
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });