"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDB = exports.connectDB = exports.closeDB = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongodb = require("mongodb");
var _environment = require("./environment");
var MONGODB_URI = _environment.env.MONGODB_URI,
  DATABASE_NAME = _environment.env.DATABASE_NAME;
var dbInstance = null;
var dbClientInstance = new _mongodb.MongoClient(MONGODB_URI, {
  serverApi: {
    version: _mongodb.ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});
var connectDB = exports.connectDB = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return dbClientInstance.connect();
        case 2:
          dbInstance = dbClientInstance.db(DATABASE_NAME);
        case 3:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function connectDB() {
    return _ref.apply(this, arguments);
  };
}();
var getDB = exports.getDB = function getDB() {
  if (!dbInstance) throw new Error('Must to connect to database first!');
  return dbInstance;
};
var closeDB = exports.closeDB = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return dbInstance.close();
        case 2:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function closeDB() {
    return _ref2.apply(this, arguments);
  };
}();