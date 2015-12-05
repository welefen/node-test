module.exports = function(){
  return Promise.resolve(1).then(function(data){
    return data + 2;
  })
}