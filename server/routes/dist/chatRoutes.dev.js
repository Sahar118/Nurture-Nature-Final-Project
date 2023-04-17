"use strict";

var router = require("express").Router();

var Chat = require("../models/chatModels");

var Message = require("../models/messageModel");

var authMiddleware = require("../middlewares/authMiddleware"); // create a new chat


router.post("/create-new-chat", authMiddleware, function _callee(req, res) {
  var newChat, savedChat;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newChat = new Chat(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newChat.save());

        case 4:
          savedChat = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(savedChat.populate("members"));

        case 7:
          res.send({
            success: true,
            message: "Chat created successfully",
            data: savedChat
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.send({
            success: false,
            message: "Error creating chat",
            error: _context.t0.message
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // get all chats of current user

router.get("/get-all-chats", authMiddleware, function _callee2(req, res) {
  var chats;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Chat.find({
            members: {
              $in: [req.body.userId]
            }
          }).populate("members").populate("lastMessage").sort({
            updatedAt: -1
          }));

        case 3:
          chats = _context2.sent;
          res.send({
            success: true,
            message: "Chats fetched successfully",
            data: chats
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send({
            success: false,
            message: "Error fetching chats",
            error: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // clear all unread messages of a chat

router.post("/clear-unread-messages", authMiddleware, function _callee3(req, res) {
  var chat, updatedChat;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Chat.findById(req.body.chat));

        case 3:
          chat = _context3.sent;

          if (chat) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.send({
            success: false,
            message: "Chat not found"
          }));

        case 6:
          _context3.next = 8;
          return regeneratorRuntime.awrap(Chat.findByIdAndUpdate(req.body.chat, {
            unreadMessages: 0
          }, {
            "new": true
          }).populate("members").populate("lastMessage"));

        case 8:
          updatedChat = _context3.sent;
          _context3.next = 11;
          return regeneratorRuntime.awrap(Message.updateMany({
            chat: req.body.chat,
            read: false
          }, {
            read: true
          }));

        case 11:
          res.send({
            success: true,
            message: "Unread messages cleared successfully",
            data: updatedChat
          });
          _context3.next = 17;
          break;

        case 14:
          _context3.prev = 14;
          _context3.t0 = _context3["catch"](0);
          res.send({
            success: false,
            message: "Error clearing unread messages",
            error: _context3.t0.message
          });

        case 17:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 14]]);
});
module.exports = router;