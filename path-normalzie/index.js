
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();
var path = require('path');

var normalize = function(urlpath){
  urlpath = path.normalize(urlpath).replace(/\\/g, '/');
}
var filter = function(urlpath){
  urlpath = urlpath.replace(/\\/g, '/').split('/').filter(function(item){
    if(!item || item[0] === '.'){
      return;
    }
    return item;
  })
}
var filter_for = function(urlpath){
  urlpath = urlpath.replace(/\\/g, '/').split('/');
  var result = [];
  for(var i=0,length=urlpath.length;i<length;i++){
    var item = urlpath[i];
    if(!item || item[0] === '.'){
      continue;
    }
    result.push(item);
  }
  return result.join('/');
}

var filter_string = function(urlPath){
  var length = urlPath.length;
  var i = 0;
  var chr;
  var result = [];
  var value = '';
  while(i < length){
    chr = urlPath[i++];
    if(chr === '/' || chr === '\\'){
      if(value && value[0] !== '.'){
        result.push(value);
      }
      value = '';
    }else{
      value += chr;
    }
  }
  if(value && value[0] !== '.'){
    result.push(value);
  }
  return result.join('/');
}


suite
.add('normalize', function () {
  normalize('/../../.\\.\\.../etc/passwd/')
})
.add('filter', function () {
  filter('/../../.\\.\\.../etc/passwd/')
})
.add('filter_for', function () {
  filter_for('/../../.\\.\\.../etc/passwd/')
})
.add('filter_string', function () {
  filter_string('/../../.\\.\\.../etc/passwd/')
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });