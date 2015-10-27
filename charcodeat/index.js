var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();



var source = ' \u00a0\n\r\t\ffff\u000b\u200b\u2000\u2001eeee\u2002\u2003\u2004\u2005\u2006ee\u2007\u2008\u2009ff\u200a\u202ffff\u205f\u3000';
var length = source.length;


var obj = {};

var string = ' \u00a0\n\r\t\f\u000b\u200b\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000';
string.split('').forEach(function(key){
  obj[key] = true;
})


var fn1 = function(){
  var i = 0, chr;
  while(i < length){
    chr = source[i++];
    if (chr in obj) {

    }
  }
}

var fn2 = function(){
  var i = 0, chr, code;
  while(i < length){
    chr = source[i++];
    code = chr.charCodeAt(0);
    if( code === 0x0020 ||  
      code === 0x00a0 ||  
      code === 0x000a ||  
      code === 0x000d ||  
      code === 0x0009 ||  
      code === 0x000c ||  
      code === 0x000b ||  
      code === 0x200b ||  
      code === 0x180e ||  
      code === 0x2000 ||  
      code === 0x2001 ||  
      code === 0x2002 ||  
      code === 0x2003 ||  
      code === 0x2004 ||  
      code === 0x2005 ||  
      code === 0x2006 ||  
      code === 0x2007 ||  
      code === 0x2008 ||  
      code === 0x2009 ||  
      code === 0x200a ||  
      code === 0x202f ||  
      code === 0x205f ||  
      code === 0x3000){
      
    }
  }
}

var fn3 = function(){
  var i = 0, chr, code;
  while(i < length){
    chr = source[i++];
    code = chr.charCodeAt(0);
    switch(code){
      case 0x0020:
      case 0x00a0:
      case 0x000a:
      case 0x000d:
      case 0x0009:
      case 0x000c:
      case 0x000b:
      case 0x200b:
      case 0x180e:
      case 0x2000:
      case 0x2001:
      case 0x2002:
      case 0x2003:
      case 0x2004:
      case 0x2005:
      case 0x2006:
      case 0x2007:
      case 0x2008:
      case 0x2009:
      case 0x200a:
      case 0x202f:
      case 0x205f:
      case 0x3000:
        break;
    }
  }
}



suite.add('fn1', function () {
   fn1();
})
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