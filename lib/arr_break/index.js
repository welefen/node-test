var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var arr =[];
for(var i=0;i<1000;i++){
  arr.push(Math.random());
}


var forIt = function(){
  for(var i=0,length=arr.length;i<length;i++){
    if(arr[i] > 0.5){
      break;
    }
  }
}

var tryIt = function(){
  try{
    arr.forEach(function(item){
      if(item > 0.5){
        throw new Error('welefen');
      }
    })
  }catch(e){}
}
var some = function(){
  arr.some(function(item){
    return item > 0.5;
  })
}

var d = arr.slice(0);
var forEachWithoutSlice = function(){
  d.forEach(function(item, i, arr){
    if(item > 0.5){
      arr.length = i;
    }
  })
}

var forEach = function(){
  var d = arr.slice(0);
  d.forEach(function(item, i, arr){
    if(item > 0.5){
      arr.length = i;
    }
  })
}

var every = function(){
  arr.every(function(item){
    return item <= 0.5;
  })
}

var forOf = function(){
  for(var item of arr){
    if(item > 0.5){
      break;
    }
  }
}


suite.add('forIt', function () {
   forIt();
})
suite.add('tryIt', function () {
   tryIt();
})
suite.add('some', function () {
   some();
})
suite.add('every', function () {
   every();
})
suite.add('forOf', function () {
   forOf();
})
suite.add('forEachWithoutSlice', function () {
   forEachWithoutSlice();
})
suite.add('forEach', function () {
   forEach();
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });


// forIt x 66,256,927 ops/sec ±0.94% (89 runs sampled)
// tryIt x 140,566 ops/sec ±1.30% (89 runs sampled)
// some x 8,126,852 ops/sec ±1.11% (94 runs sampled)
// every x 8,392,649 ops/sec ±1.17% (88 runs sampled)
// forOf x 3,524,064 ops/sec ±0.74% (92 runs sampled)
// forEachWithoutSlice x 10,240,706 ops/sec ±0.82% (91 runs sampled)
// forEach x 180,075 ops/sec ±0.74% (90 runs sampled)
// Fastest is forIt