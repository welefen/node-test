var MyClass = (function() {

  // module scoped symbol
  var key = Symbol("key");

  function MyClass(privateData) {
    this[key] = privateData;
  }

  MyClass.prototype = {
    doStuff: function() {
      
    }
  };

  return MyClass;
})();

var c = new MyClass("hello")
c["key"] === undefined