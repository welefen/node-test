var co = require('co');

module.exports = function(){
  return co(function *(){
    var num1 = yield Promise.resolve(1);
    var num2 = yield Promise.resolve(2);
    return num1 + num2;
  })
}