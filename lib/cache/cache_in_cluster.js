var cluster = require('cluster');
var http = require('http');
var numCPUs = require('os').cpus().length;
var cache = {};
var fs = require("fs");
var file = "a.json";
if (cluster.isMaster) {
  // Fork workers.
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  // Workers can share any TCP connection
  // In this case its a HTTP server
  http.createServer(function(req, res) {
    if (!fs.existsSync(file)) {
    	cache = {name: 1111};
    	fs.writeFileSync(file, "wwww");
    }
    console.log(cluster.worker.id, cache);
    res.end("hello world\n");
  }).listen(8000);
}

//需要在高并发的情况下才能看到不能的worker
// ab -n 100 -c 10 http://127.0.0.1:8000/