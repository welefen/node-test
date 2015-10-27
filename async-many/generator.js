var co = require('co');

var fn = function*(){
  var result = yield [
    Promise.resolve(1),
    Promise.resolve(2)
  ];
  return result;
}

co(fn).then(function(data){
  console.log(data);
}).catch(function(data){
  console.log(data)
})