'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];

var _Promise = require('babel-runtime/core-js/promise')['default'];

var B = (function () {
  var _class = function B() {
    _classCallCheck(this, _class);
  };

  return _class;
})();
var A = (function (_B) {
  function A() {
    _classCallCheck(this, A);

    if (_B != null) {
      _B.apply(this, arguments);
    }
  }

  _inherits(A, _B);

  A.prototype.test = function test() {};

  A.prototype.getName = function getName() {
    return _regeneratorRuntime.async(function getName$(context$2$0) {
      while (1) switch (context$2$0.prev = context$2$0.next) {
        case 0:
          context$2$0.next = 2;
          return _Promise.resolve();

        case 2:
          this.value = 1;

        case 3:
        case 'end':
          return context$2$0.stop();
      }
    }, null, this);
  };

  return A;
})(B);

var instance = new A();
instance.getName().then(function () {
  console.log(instance.value);
});

module.exports = A;

