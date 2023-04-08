"use strict";

var router = require('express').Router();

var authMiddleware = require('../middlewares/authMiddleware');

var Event = require('../models/eventModel'); //  add a new Event


router.post('/add-event', authMiddleware, function _callee(req, res) {
  var newEvent;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newEvent = new Event(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newEvent.save());

        case 4:
          res.send({
            success: true,
            message: "Event added successfully"
          });
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.send({
            success: false,
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;