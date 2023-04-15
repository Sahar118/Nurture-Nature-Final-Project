"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _loaderSlice = _interopRequireDefault(require("./loaderSlice"));

var _usersSlice = _interopRequireDefault(require("./usersSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _toolkit.configureStore)({
  reducer: {
    loaders: _loaderSlice["default"],
    users: _usersSlice["default"]
  }
});
var _default = store;
exports["default"] = _default;