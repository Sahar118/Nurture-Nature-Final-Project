"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ClearChatMessages = exports.CreateNewChat = exports.GetAllChats = void 0;

var _require = require("."),
    axiosInstance = _require.axiosInstance; // get all chats


var GetAllChats = function GetAllChats() {
  var response;
  return regeneratorRuntime.async(function GetAllChats$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/chats/get-all-chats"));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0.message);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // create new chat 


exports.GetAllChats = GetAllChats;

var CreateNewChat = function CreateNewChat(members) {
  var response;
  return regeneratorRuntime.async(function CreateNewChat$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post('/api/chats/create-new-chat', {
            members: members
          }));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0.message);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.CreateNewChat = CreateNewChat;

var ClearChatMessages = function ClearChatMessages(chatId) {
  var response;
  return regeneratorRuntime.async(function ClearChatMessages$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post("/api/chats/clear-unread-messages", {
            chat: chatId
          }));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          throw _context3.t0;

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.ClearChatMessages = ClearChatMessages;