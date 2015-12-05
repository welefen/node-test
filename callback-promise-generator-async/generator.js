var co = require('co');

module.exports = function(){
  return co(function *(){
    var value = yield Promise.resolve(1);
    return value + 2;
  })
}