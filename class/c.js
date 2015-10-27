'use strict';

var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];

var _inherits = require('babel-runtime/helpers/inherits')['default'];

var thinkit = require('thinkit');

var A = (function () {
  function A() {
    _classCallCheck(this, A);
  }

  A.prototype.getName = function getName() {
    return 'A';
  };

  return A;
})();

var B = (function (_A) {
  function B() {
    _classCallCheck(this, B);

    if (_A != null) {
      _A.apply(this, arguments);
    }
  }

  _inherits(B, _A);

  B.prototype.getName = function getName() {
    return _A.prototype.getName.call(this) + 'B';
  };

  return B;
})(A);

var C = thinkit.Class(B, {
  getName: function getName() {
    return this['super']('getName') + 'C';
  }
});

var D = thinkit.Class(C, {
  getName: function getName() {
    return this['super']('getName') + 'D';
  }
});

var E = (function (_D) {
  function E() {
    _classCallCheck(this, E);

    if (_D != null) {
      _D.apply(this, arguments);
    }
  }

  _inherits(E, _D);

  E.prototype.getName = function getName() {
    return _D.prototype.getName.call(this) + 'E';
  };

  return E;
})(D);

var instance = new E();
console.log(instance.getName());

