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
}); //  get all events

router.get('/get-all-events', function _callee2(req, res) {
  var events;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Event.find().sort({
            date: +1
          }));

        case 3:
          events = _context2.sent;
          res.send({
            success: true,
            message: " Events fetched successfully",
            data: events
          });
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.send({
            success: false,
            message: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //  Update an event

router.post('/update-event', authMiddleware, function _callee3(req, res) {
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Event.findByIdAndUpdate(req.body.eventId, req.body));

        case 3:
          res.send({
            success: true,
            message: "Event update successfully"
          });
          _context3.next = 9;
          break;

        case 6:
          _context3.prev = 6;
          _context3.t0 = _context3["catch"](0);
          res.send({
            success: false,
            message: _context3.t0.message
          });

        case 9:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
module.exports = router;