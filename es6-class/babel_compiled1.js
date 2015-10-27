'use strict';

function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
        throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) subClass.__proto__ = superClass;
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError('Cannot call a class as a function');
    }
}

var A = (function() {
    function A() {
        _classCallCheck(this, A);

        this.name = 'welefen';
    }

    A.prototype.test = function test() {
        return 1;
    };

    return A;
})();

var B = (function(_A) {
    function B() {
        _classCallCheck(this, B);

        if (_A != null) {
            _A.apply(this, arguments);
        }
    }

    _inherits(B, _A);

    B.prototype.test = function test() {
        return _A.prototype.test.call(this) + 1;
    };

    return B;
})(A);

module.exports = B;