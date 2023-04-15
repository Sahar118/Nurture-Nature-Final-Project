"use strict";

var router = require('express').Router();

var authMiddleware = require('../middlewares/authMiddleware');

var Chat = require('../models/chatModels'); // Create new chat


router.post('/create-new-chat', authMiddleware, function _callee(req, res) {
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
          res.send({
            success: true,
            message: 'Chat created Successfully',
            data: savedChat
          });
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          res.send({
            success: false,
            message: 'Error creating Chat ',
            error: _context.t0.message
          });

        case 11:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
}); //  get all chat of current user

router.get('/get-all-chats', authMiddleware, function _callee2(req, res) {
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
          }));

        case 3:
          chats = _context2.sent;
          res.send({
            success: true,
            message: " Chats fetched successfully",
            data: chats
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send({
            success: false,
            message: " Error fetching chats",
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