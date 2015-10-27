module.exports = async function(){
  var value = await Promise.resolve(1);
  value += await Promise.resolve(2);
  value += await Promise.resolve(3);
  value += await Promise.resolve(4);
  value += await Promise.resolve(5);
  return value;
}