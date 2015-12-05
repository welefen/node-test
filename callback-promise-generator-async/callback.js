// module.exports = function(callback){
//   var fn1 = function(callback){
//     process.nextTick(function(){
//       callback(1);
//     })
//   }
//   process.nextTick(function(){
//     fn1(function(value){
//       var data = value + 2;
//       callback(data);
//     })
//   })
// }

module.exports = function(callback){
  var fn1 = function(callback){
    callback(1);
  };
  fn1(function(value){
    var data = value + 2;
    callback(data);
  })
}