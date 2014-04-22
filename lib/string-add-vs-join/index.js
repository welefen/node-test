//arr.join和+=的性能对比

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var arr = [];
for(var i=0;i<10000;i++){
  arr.push("xxxx" + Math.random());
}

suite
.add('use add', function () {
    var str = "";
    for(var i=0,length=arr.length;i<length;i++){
      str += arr[i];
    }
    return str;
})
.add('use join', function () {
    var str = [];
    for(var i=0,length=arr.length;i<length;i++){
      str[i] = arr[i];
    }
    return str.join("");
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });