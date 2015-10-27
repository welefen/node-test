
var fn = async function(){
  var result = await new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve(111);
    }, 10)
  });
  return result;
}

for(var i=0;i<100000;i++){
  fn();
}

setInterval(function(){
  var usage = process.memoryUsage();
  console.log('rss', usage.rss, 'heapTotal', usage.heapTotal, 'heapUsed', usage.heapUsed)
}, 1000)