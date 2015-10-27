//循环体内有function

var Benchmark = require('benchmark');

var suite = new Benchmark.Suite();

var fs = require('fs');
global.isFile = function(p){
  'use strict';
  if (!fs.existsSync(p)) {
    return false;
  }
  var stats = fs.statSync(p);
  return stats.isFile();
};

var LIB_PATH = '/Users/welefen/Develop/git/meinv.ueapp.com/App/Lib';
var THINK_LIB_PATH = '/Users/welefen/Develop/git/thinkjs/lib/Lib';
var THINK_EXTEND_PATH = '/Users/welefen/Develop/git/thinkjs/lib/Lib/Extend'
var file = '__CLASS__.js';
var autoloadPaths = {
  'Behavior': [
    LIB_PATH + '/Behavior/' + file,
    THINK_LIB_PATH + '/Behavior/' + file
  ],
  'Model': [
    LIB_PATH + '/Model/' + file,
    THINK_EXTEND_PATH + '/Model/' + file
  ],
  'Logic': [
    LIB_PATH + '/Logic/' + file
  ],
  'Service': [
    LIB_PATH + '/Service/' + file
  ],
  'Controller': [
    LIB_PATH + '/Controller/' + file,
    THINK_EXTEND_PATH + '/Controller/' + file
  ],
  'Cache': [
    LIB_PATH + '/Driver/Cache/' + file,
    THINK_LIB_PATH + '/Driver/Cache/' + file
  ],
  'Db': [
    LIB_PATH + '/Driver/Db/' + file,
    THINK_LIB_PATH + '/Driver/Db/' + file
  ],
  'Template': [
    LIB_PATH + '/Driver/Template/' + file,
    THINK_LIB_PATH + '/Driver/Template/' + file
  ],
  'Socket': [
    LIB_PATH + '/Driver/Socket/' + file,
    THINK_LIB_PATH + '/Driver/Socket/' + file
  ],
  'Session': [
    LIB_PATH + '/Driver/Session/' + file,
    THINK_LIB_PATH + '/Driver/Session/' + file
  ]
};

var autoload = function(cls){
  'use strict';
  var filepath = '';
  var fn = function(item){
    item = item.replace(/__CLASS__/g, cls);
    if (isFile(item)) {
      filepath = item;
      return true;
    }
  };
  for(var name in autoloadPaths){
    var length = name.length;
    if (cls.substr(0 - length) === name) {
      var list = autoloadPaths[name];
      list.some(fn);
      if (filepath) {
        return filepath;
      }
    }
  }
}

var autoload1 = function(cls){
  'use strict';
  for(var name in autoloadPaths){
    var length = name.length;
    if (cls.substr(0 - length) === name) {
      var list = autoloadPaths[name];
      for(var i=0,length=list.length;i<length;i++){
        var item = list[i].replace(/__CLASS__/g, cls);
        if (isFile(item)) {
          return item;
        };
      }
    }
  }
}
var autoload2 = function(cls){
  'use strict';
  var reg = /[A-Z][a-z]+$/;
  var matches = cls.match(reg);
  if (matches && matches[0] && (matches[0] in autoloadPaths)) {
    var list = autoloadPaths[matches[0]];
    for(var i=0,length=list.length;i<length;i++){
      var item = list[i].replace(/__CLASS__/g, cls);
      if (isFile(item)) {
        return item;
      };
    }
  }
}

var autoload3 = function(cls){
  'use strict';
  for(var name in autoloadPaths){
    var length = name.length;
    if (cls.substr(0 - length) === name) {
      var list = autoloadPaths[name];
      for(var i=0,length=list.length;i<length;i++){
        var item = list[i].replace('__CLASS__', cls);
        if (isFile(item)) {
          return item;
        };
      }
    }
  }
}


suite.add('autoload with some', function () {
   autoload('UserModel');
})
.add('autoload', function (defer) {
   autoload1('UserModel');
})
.add('autoload2', function (defer) {
   autoload2('UserModel');
})
.add('autoload3', function (defer) {
   autoload3('UserModel');
})
.on('cycle', function (event) {
  console.log(String(event.target));
}).on('complete', function () {
  console.log('Fastest is ' + this.filter('fastest').pluck('name'));
})
.run({ async: true });