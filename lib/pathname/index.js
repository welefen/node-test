
var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fn1 = function(pathname){
  pathname = pathname.split('/').filter(function(item){
    return item;
  });
  return pathname;
}

var fn2 = function(pathname){
  pathname = pathname.replace(/^\/+/, '').replace(/\/+$/, '').replace(/\/+/g, '/').split('/');
  return pathname;
}

var fn3 = function(pathname){
  pathname = pathname.replace(/(^\/+)|(\/+$)/g, '').replace(/\/+/g, '/').split('/');
  return pathname;
}

var fn4 = function(pathname){
  pathname = pathname.split('/');
  var ret = [];
  for(var i=0,length=pathname.length;i<length;i++){
    if (pathname[i]) {
      ret.push(pathname[i]);
    };
  }
  return ret;
}

var fn5 = function(pathname){
  return fn4(pathname);
}

var fn6 = function(pathname){
  pathname = pathname.split('/');
  var ret = [], j= 0;
  for(var i=0,length=pathname.length;i<length;i++){
    if (pathname[i]) {
      ret[j++] = pathname[i];
    };
  }
  return ret;
}


var fn7 = function(pathname){
  pathname = pathname.split(/\/+/);
  var ret = [], j= 0;
  for(var i=0,length=pathname.length;i<length;i++){
    if (pathname[i]) {
      ret[j++] = pathname[i];
    };
  }
  return ret;
}



suite
.add('use filter', function () {
  fn1('welefen');
  fn1('/welefen/welefen');
  fn1('/welefen/welefen/');
  fn1('/welefen//welefen');
})
.add('use reg', function () {
  fn2('welefen');
  fn2('/welefen/welefen');
  fn2('/welefen/welefen/');
  fn2('/welefen//welefen');
})
.add('use reg1', function () {
  fn3('welefen');
  fn3('/welefen/welefen');
  fn3('/welefen/welefen/');
  fn3('/welefen//welefen');
})
.add('use for', function () {
  fn4('welefen');
  fn4('/welefen/welefen');
  fn4('/welefen/welefen/');
  fn4('/welefen//welefen');
})
.add('use for1', function () {
  fn5('welefen');
  fn5('/welefen/welefen');
  fn5('/welefen/welefen/');
  fn5('/welefen//welefen');
})
.add('use for2', function () {
  fn6('welefen');
  fn6('/welefen/welefen');
  fn6('/welefen/welefen/');
  fn6('/welefen//welefen');
})
.add('use for3', function () {
  fn7('welefen');
  fn7('/welefen/welefen');
  fn7('/welefen/welefen/');
  fn7('/welefen//welefen');
})


// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });