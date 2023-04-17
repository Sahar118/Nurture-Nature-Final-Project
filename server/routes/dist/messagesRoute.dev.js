"use strict";

var router = require("express").Router();

var Chat = require("../models/chatModels");

var Message = require("../models/messageModel");

var authMiddleware = require("../middlewares/authMiddleware"); // new message


router.post("/new-message", function _callee(req, res) {
  var newMessage, savedMessage;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          // store message
          newMessage = new Message(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newMessage.save());

        case 4:
          savedMessage = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(Chat.findOneAndUpdate({
            _id: req.body.chat
          }, {
            lastMessage: savedMessage._id,
            $inc: {
              unreadMessages: 1
            }
          }));

        case 7:
          res.send({
            success: true,
            message: "Message sent successfully",
            data: savedMessage
          });
          _context.next = 13;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.send({
            success: false,
            message: "Error sending message",
            error: _context.t0.message
          });

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 10]]);
}); // get all messages of a chat

router.get("/get-all-messages/:chatId", function _callee2(req, res) {
  var messages;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Message.find({
            chat: req.params.chatId
          }).sort({
            createdAt: 1
          }));

        case 3:
          messages = _context2.sent;
          res.send({
            success: true,
            message: "Messages fetched successfully",
            data: messages
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send({
            success: false,
            message: "Error fetching messages",
            error: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;