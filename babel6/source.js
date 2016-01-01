
var a = class {
  async test(){
    let value = await Promise.resolve(1);
    await Promise.reject(new Error('error'))
    return value;
  }
  static test(){

  }
}
var instance = new a();
instance.test().then(function(data){
  console.log('data', data);
})
var b = class extends a {
  async test(){
    await super.test();
    await Promise.resolve(2);
  }
}

async function c(){
  var data = [1, 2, 3];
  for(var i =0,length = data.length;i<length;i++){
    var result = await Promise.resolve(data[i]);
  }
}

export default b;

