var co = require('co')
var A = class {

}

var B = class extends A{
  getName(){

  }
}

var C = class extends B{
  getName(){

  }
}

var instance = new C();

var fn = co.wrap(instance.getName);
fn();