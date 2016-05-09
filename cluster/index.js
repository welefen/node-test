const cluster = require('cluster');
const http = require('http');
const numCPUs =  require('os').cpus().length;

if (cluster.isMaster) {
  

  var startTime = Date.now();

  var total = 0;
  for(var i =0; i< numCPUs;i++){

    var itemTotal = 0;
    for(var j=0;j<1000000000;j++){
      itemTotal += j;
    }
    total += itemTotal;
  }
  total = total/numCPUs;

  var endTime = Date.now();

  console.log('slow time', (endTime - startTime), total);


  var startTime = Date.now();
  var num = 0;
  var totalPool = 0;

  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  Object.keys(cluster.workers).forEach((id) => {
    cluster.workers[id].send({message: 'calc', start: 0, end: 1000000000})
    cluster.workers[id].on('message', (data) => {
      num++;
      totalPool += data.result;
      if(num === numCPUs){
        var endTime = Date.now();
        console.log('pool time', (endTime - startTime), totalPool/numCPUs);
      }
    });
  });

} else {

  //console.log('worker')

 //process.send({ cmd: 'notifyRequest' });

 process.on('message', (message) => {
    var total = 0;
    for(var j=message.start;j<message.end;j++){
      total += j;
    }
   process.send({ result: total });
 })

}