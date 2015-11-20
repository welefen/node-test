

module.exports = async function(){
  var num1 = await Promise.resolve(1);
  var num2 = await Promise.resolve(2);
  return num1 + num2;
}