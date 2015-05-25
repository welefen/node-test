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