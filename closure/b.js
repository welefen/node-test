var reg = /\w+/;
module.exports = function(str){
  return reg.test(str);
}