var fn = async function(){
  var value;
  //try{
      var value = await Promise.resolve(1);
      value += await Promise.resolve(2);
      value += await Promise.reject(new Error(3));
      value += await Promise.resolve(4);
      value += await Promise.resolve(5);
  // }catch(err){
  //   console.log(err);
  // }
  return value;
}


fn().then(function(data){
  console.log(data)
}).catch(function(err){
  console.log(err);
});