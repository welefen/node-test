// Flags: --allow-natives-syntax


function toFastProperties(obj) {
  /*jshint -W027*/
  function f() {}
  f.prototype = obj;
  new f();
  //return;
  //eval(obj);
};


function SlowObject() {
  this.foo = 1;
  this.bar = 2;
  this.qux = 3;
  for(var i=0;i<100;i++){
    this[Math.random() + 'www'] = Math.random();
  }
  //delete this.qux;
  console.log('SlowObject instance', %HasFastProperties(this));
}

SlowObject.prototype = {
  get x(){

  }
}

var a = new SlowObject();
console.log('SlowObject.prototype', %HasFastProperties(SlowObject.prototype));


var b = {};
for(var i=0;i<1000;i++){
  b[Math.random() + 'www'] = Math.random();
}

var start = Date.now();
for(var i=0;i<10000;i++){
  if(b.xxx){}
  for(var a in b){}
}
var end = Date.now();

console.log('for in b', end - start)




var start = Date.now();
toFastProperties(b);
for(var i=0;i<10000;i++){
  if(b.xxx){}
  for(var a in b){}
}
var end = Date.now();

console.log('for in b', end - start)


console.log('object b', %HasFastProperties(b));


var c = [1,2, 4];

for(var i=0;i<1000;i++){
  c.push(Math.random() + '$wrqwerqwer')
}

console.log('array c', %HasFastProperties(c));