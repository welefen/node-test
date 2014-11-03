var Benchmark = require('benchmark');
var suite = new Benchmark.Suite();

var getData = function(length){
  var data = [];
  length = length || å100;
  for(var i=0;i<length;i++){
    data[i] = Math.random();
  }
  return data;
}
var data = getData(10000)

var bubbleSort = function(data){
  var length = data.length;
  for(var i = length; i > 1; --i){
    for(var j = 0; j < i - 1; j++){
      if (data[j] > data[j + 1]) {
        var tmp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = tmp;
      };
    }
  }
  return data;
}

var selectSort = function(data){
  var length = data.length;
  for(var i = 0; i < length; i++){
    for(var j = i + 1 ; j < length; j++){
      if (data[i] > data[j]) {
        var tmp = data[i];
        data[i] = data[j];
        data[j] = tmp;
      };
    }
  }
  return data;
}

var insertSort = function(data){
  var length = data.length, tmp, inner;
  for(var i = 1; i < length; i++){
    tmp = data[i];
    inner = i;
    while(inner > 0 && (data[inner - 1] > tmp)){
      data[inner] = data[inner - 1];
      inner--;
    }
    data[inner] = tmp;
  }
  return data;
}

//console.log(insertSort(getData(10).slice(0)))


suite.add('bubbleSort', function () {
  bubbleSort(data.slice(0))
}).add('selectSort', function () {
  selectSort(data.slice(0))
}).add('insertSort', function () {
  insertSort(data.slice(0))
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();