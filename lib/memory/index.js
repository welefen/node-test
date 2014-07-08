var str = {};
var nums = 1;
var a = function(){
  console.log("interval nums", nums++);
  for(var i =0;i<1000000;i++){
    str["welefen" + Math.random()] = "welefen";
  }
  a();
}

a();

process.on("uncaughtException", function(err){
  console.log(err && err.stack || err);
})