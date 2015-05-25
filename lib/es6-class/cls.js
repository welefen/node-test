class A{
  constructor(){
    this.name = 'welefen';
  }
  test(){
    return 1;
  }
}

class B extends A{
  test(){
    return super.test() + 1;
  }
}

module.exports = B;