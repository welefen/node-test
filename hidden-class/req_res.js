var http = require('http');
const Stream = require('stream');

var IncommingMessage = require('_http_incoming').IncomingMessage;
IncommingMessage.prototype.read = function(n){
  this._consuming = true;
  var read = Stream.Readable.prototype.read;
  return read.call(this, n);
}

var prevReq = null;
var prevRes = null;
var server = http.createServer(function(req, res){
  if(!prevReq){
    prevReq = req;
    prevRes = res;
  }else{
    console.log('req', %HaveSameMap(req, prevReq));
    console.log('res', %HaveSameMap(res, prevRes));
  }
  res.end('hello word');
});

server.listen(3337);

console.log('server running at http://127.0.0.1:3337');