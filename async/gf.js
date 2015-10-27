module.exports = function*(){
  var value = yield Promise.resolve(1);
  value += yield Promise.resolve(2);
  value += yield Promise.resolve(3);
  value += yield Promise.resolve(4);
  value += yield Promise.resolve(5);
  return value;
}