"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _mongodb = require("./config/mongodb");
var _asyncExitHook = _interopRequireDefault(require("async-exit-hook"));
var _environment = require("./config/environment");
var _v = require("./routes/v1");
var _errorHandling = require("./middlewares/errorHandling");
/* eslint-disable no-console */

var START_SERVER = function START_SERVER() {
  var app = (0, _express["default"])();
  app.use(_express["default"].json());
  app.use('/v1', _v.APIs_V1);
  app.use(_errorHandling.errorHandlingMiddleware);
  app.listen(_environment.env.SERVER_PORT, _environment.env.SERVER_HOST, function () {
    return console.log("Server running at: http(s)://".concat(_environment.env.SERVER_HOST, ":").concat(_environment.env.SERVER_PORT));
  });
  (0, _asyncExitHook["default"])(function () {
    (0, _mongodb.closeDB)();
  });
};
(0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        try {
          // await connectDB()
          START_SERVER();
        } catch (error) {
          console.error(error);
          process.exit(0);
        }
      case 1:
      case "end":
        return _context.stop();
    }
  }, _callee);
}))();