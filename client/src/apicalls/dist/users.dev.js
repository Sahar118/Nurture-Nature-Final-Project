"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllUsers = exports.GetCurrentUser = exports.LoginUser = exports.RegisterUser = void 0;

var _require = require("."),
    axiosInstance = _require.axiosInstance; // Register a new user


var RegisterUser = function RegisterUser(payload) {
  var response;
  return regeneratorRuntime.async(function RegisterUser$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post("/api/users/register", payload));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0.response);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Login a user


exports.RegisterUser = RegisterUser;

var LoginUser = function LoginUser(payload) {
  var response;
  return regeneratorRuntime.async(function LoginUser$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post("/api/users/login", payload));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0.response);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Get current user


exports.LoginUser = LoginUser;

var GetCurrentUser = function GetCurrentUser() {
  var response;
  return regeneratorRuntime.async(function GetCurrentUser$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/users/get-current-user"));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", _context3.t0);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Get all users


exports.GetCurrentUser = GetCurrentUser;

var GetAllUsers = function GetAllUsers() {
  var response;
  return regeneratorRuntime.async(function GetAllUsers$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/users/get-all-users"));

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", _context4.t0);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.GetAllUsers = GetAllUsers;