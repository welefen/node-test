'use strict';

var B = class {

}
var A = class A extends B{
  test(){

  }
  async getName(){
    await Promise.resolve();
    this.value = 1;
  }
  static async getName1(){
    await Promise.resolve();
    //this.value = 1;
  }
}

async function test(){
   await Promise.resolve();
}

let instance = new A();
instance.getName().then(() => {
  console.log(instance.value);
})

module.exports = A;

var a = async() => {
  await Promise.resolve();
}