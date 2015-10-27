if (!global.Promise) {
  //global.Promise = require('es6-promise').Promise;
}

//Promise defer
if (!Promise.defer) {
  Promise.defer = function(){
    var deferred = {};
    deferred.promise = new Promise(function(resolve, reject){
      deferred.resolve = resolve;
      deferred.reject = reject;
    });
    return deferred;
  }
}
var getPeddingPromise = function(){
  var deferred = Promise.defer();
  deferred.promise.then(function(){
    return 1;
  }).catch(function(){
    return 2;
  })
  return deferred.promise;
}

var getResolvePromise = function(){
  var deferred = Promise.defer();
  deferred.promise.then(function(){
    return 1;
  })
  //deferred.resolve();
  return deferred.promise;
}

function test(){
  for(var i=0;i<100000;i++){
    getResolvePromise();
  }
}

setInterval(function(){
  test();
  console.log(process.memoryUsage());
}, 100)