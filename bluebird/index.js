
var bluebird = require('bluebird');
var microtime = require('microtime');

Promise.resolve(3333).then(function(){
  bluebird.resolve(2222).then(function(data){
    var startTime = microtime.now();
    bluebird.resolve(1111).then(function(data){
      var endTime = microtime.now();
      console.log('bluebird', endTime - startTime)
    })

    var startTime1 = microtime.now();
    Promise.resolve(1111).then(function(data){
      var endTime1 = microtime.now();
      console.log('promise', endTime1 - startTime1)
    })
  })
})


