"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.env = void 0;
require("dotenv/config");
var env = exports.env = {
  MONGODB_URI: process.env.MONGODB_URI,
  DATABASE_NAME: process.env.DATABASE_NAME,
  SERVER_HOST: process.env.SERVER_HOST || 'localhost',
  SERVER_PORT: process.env.SERVER_PORT || 8017,
  BUILD_MODE: process.env.BUILD_MODE || 'dev'
};