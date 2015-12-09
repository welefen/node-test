'use strict';

exports.__esModule = true;

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = (function () {
  function a() {
    (0, _classCallCheck3.default)(this, a);
  }

  a.prototype.test = (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
      var value;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _promise2.default.resolve(1);

            case 2:
              value = _context.sent;
              _context.next = 5;
              return _promise2.default.reject(new Error('error'));

            case 5:
              return _context.abrupt('return', value);

            case 6:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return function test() {
      return ref.apply(this, arguments);
    };
  })();

  a.test = function test() {};

  return a;
})();
var instance = new a();
instance.test().then(function (data) {
  console.log('data', data);
});
var b = (function (_a) {
  (0, _inherits3.default)(b, _a);

  function b() {
    (0, _classCallCheck3.default)(this, b);
    return (0, _possibleConstructorReturn3.default)(this, _a.apply(this, arguments));
  }

  b.prototype.test = (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
      return _regenerator2.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _a.prototype.test.call(this);

            case 2:
              _context2.next = 4;
              return _promise2.default.resolve(2);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return function test() {
      return ref.apply(this, arguments);
    };
  })();

  return b;
})(a);

exports.default = b;