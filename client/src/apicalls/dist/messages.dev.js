"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetMessages = exports.sendMessage = void 0;

var _ = require(".");

var sendMessage = function sendMessage(message) {
  var response;
  return regeneratorRuntime.async(function sendMessage$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post('/api/messages/new-message', message));

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
};

exports.sendMessage = sendMessage;

var GetMessages = function GetMessages(chatId) {
  var response;
  return regeneratorRuntime.async(function GetMessages$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.get("/api/messages/get-all-messages/".concat(chatId)));

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
};

exports.GetMessages = GetMessages;