//是否使用global.

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var string = "ab-sdfa-dfaweraw-rab-sdf";

var splitArray = function(string){
  var arr = string.split('-');
  var length = arr.length;
  for(var i = 0;i < length; i++){
    if (arr[i]) {
      arr[i] = arr[i][0].toUpperCase() + arr[i].substr(1);
    };
  }
  return arr.join('-');
}
var useFor = function(string){
  var length = string.length;
  var ret = '';
  for(var i = 0; i < length; i++){
    if ( i === 0 && string[0] !== '-') {
      ret += string[0].toUpperCase();
    }else if (string[i] === '-' && i < (length - 1) && string[i+1]!== '-') {
      ret += '-' + string[i+1].toUpperCase();
      i++;
    }else{
      ret += string[i];
    }
  }
  return ret;
}

var useFor2 = function(string){
  var length = string.length;
  var ret = '';
  var flag = false;
  for(var i = 0; i < length; i++){
    if (string[i] === '-') {
      ret += '-';
      flag = true;
    }else if (i === 0) {
      ret += string[i].toUpperCase();
    }else{
      ret += flag ? string[i].toUpperCase() : string[i];
      flag = false;
    }
  }
  return ret;
}

var useReg = function(string){
  return string.replace(/^\w|\-\w/g, function(a){
    return a.toUpperCase();
  })
}



suite
.add('splitArray', function () {
   splitArray(string);
})
.add('useFor', function () {
    useFor(string);
})
.add('useFor2', function () {
    useFor2(string);
})
.add('useReg', function () {
    useReg(string);
})
// add listeners
.on('cycle', function (event) {
  console.log(String(event.target));
})
.on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });