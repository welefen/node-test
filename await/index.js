var co = require('co');


class Test {
  constructor(message){
    this.message = message;
  }
  async run(message){
    if(this.message){
      await Promise.resolve(1111);
    }
    return Promise.reject(new Error(this.message + message))
  }
}

var b = function(){
  var instance = new Test('....');
  return instance.run('welefen test');
}
var a = async function(){
  for(var i=0;i<10;i++){
    await b();
  }
  console.log(1111);
  return 1;
}

var c = async function(){
  await a();
  console.log(2222)
}

c();;