"use strict";

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CLASS = (function () {
  function CLASS() {
    (0, _classCallCheck3.default)(this, CLASS);
  }

  CLASS.prototype.query = function query(sql) {
    if (sql === 'PRAGMA table_info( user )') {
      return _promise2.default.resolve([{ "cid": 0, "name": "id", "type": "INTEGER", "notnull": 1, "dflt_value": null, "pk": 1 }, { "cid": 1, "name": "name", "type": "TEXT", "notnull": 1, "dflt_value": null, "pk": 0 }, { "cid": 2, "name": "pwd", "type": "TEXT", "notnull": 1, "dflt_value": null, "pk": 0 }, { "cid": 3, "name": "create_time", "type": "INTEGER", "notnull": 1, "dflt_value": null, "pk": 0 }]);
    } else if (sql === 'PRAGMA INDEX_LIST( user )') {
      return _promise2.default.resolve([{
        name: 'xxxx',
        unique: true
      }, {
        name: 'test'
      }]);
    } else if (sql === 'PRAGMA index_info( xxxx )') {
      return _promise2.default.resolve([{
        name: 'name'
      }]);
    }
    return _promise2.default.resolve([]);
  };

  CLASS.prototype.getSchema = (function () {
    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3(table) {
      var fieldPromise, indexPromise, ret, _ref, data, indexes;

      return _regenerator2.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              fieldPromise = this.query("PRAGMA table_info( " + table + " )");
              indexPromise = this.query("PRAGMA INDEX_LIST( " + table + " )").then((function () {
                var _this2 = this;

                var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(list) {
                  var indexes, promises;
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          indexes = {};
                          promises = list.map((function () {
                            var _this = this;

                            var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(item) {
                              var _list;

                              return _regenerator2.default.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      if (!item.unique) {
                                        _context.next = 5;
                                        break;
                                      }

                                      _context.next = 3;
                                      return _this.query("PRAGMA index_info( " + item.name + " )");

                                    case 3:
                                      _list = _context.sent;

                                      _list.forEach(function (item) {
                                        indexes[item.name] = { unique: true };
                                      });

                                    case 5:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, _this);
                            }));
                            return function (_x3) {
                              return ref.apply(this, arguments);
                            };
                          })());
                          _context2.next = 4;
                          return _promise2.default.all(promises);

                        case 4:
                          return _context2.abrupt("return", indexes);

                        case 5:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this2);
                }));
                return function (_x2) {
                  return ref.apply(this, arguments);
                };
              })());
              ret = {};
              _context3.next = 5;
              return _promise2.default.all([fieldPromise, indexPromise]);

            case 5:
              _ref = _context3.sent;
              data = _ref[0];
              indexes = _ref[1];

              data.forEach(function (item) {
                ret[item.name] = {
                  name: item.name,
                  type: item.type,
                  required: !!item.notnull,
                  default: item.dflt_value,
                  primary: !!item.pk,
                  auto_increment: false,
                  unique: !!(!item.pk && indexes[item.name] && indexes[item.name].unique)
                };
              });
              return _context3.abrupt("return", ret);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return function getSchema(_x) {
      return ref.apply(this, arguments);
    };
  })();

  return CLASS;
})();

var instance = new CLASS();
instance.getSchema('user').then(function (data) {
  console.log(data);
}).catch(function (err) {
  console.log(err.stack);
});

