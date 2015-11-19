
var A = class {
  test(){
    return 1;
  }
}

var B = class extends A {
  test(){
    return super.test() + 1;
  }
}

module.exports = B;