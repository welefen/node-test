

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var str = '/welefen/suredy//welefen/../';

var path = require('path');

suite
.add('split & filter', function () {
    var pathname = str.split('/').filter(function(item){
      return item.trim();
    }).join('/');
})
.add('path', function () {
    var pathname = str.split('/');
    var result = '';
    for(var i=0,length=pathname.length;i<length;i++){
      if (pathname[i]) {
        result+=pathname[i];
      };
    }
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run();