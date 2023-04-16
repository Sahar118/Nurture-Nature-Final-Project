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

router.get('/get-all-events', authMiddleware, function _callee2(req, res) {
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
}); // Delete an Event

router.post("/delete-event", authMiddleware, function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Event.findByIdAndDelete(req.body.eventId));

        case 3:
          res.send({
            success: true,
            message: "Event Deleted successfully"
          });
          _context4.next = 9;
          break;

        case 6:
          _context4.prev = 6;
          _context4.t0 = _context4["catch"](0);
          res.send({
            success: false,
            message: _context4.t0.message
          });

        case 9:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 6]]);
}); //  get event by id

router.get('/get-event-by-id/:id', authMiddleware, function _callee5(req, res) {
  var event;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Event.findById(req.params.id));

        case 3:
          event = _context5.sent;
          res.send({
            success: true,
            message: " Events fetched successfully",
            data: event
          });
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.send({
            success: false,
            message: _context5.t0.message
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); //  get event by District

router.get('/get-event-by-district/:district', function _callee6(req, res) {
  var event;
  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(Event.find({
            district: req.params.district
          }));

        case 3:
          event = _context6.sent;
          res.send({
            success: true,
            message: " Events fetched successfully",
            data: event
          });
          _context6.next = 10;
          break;

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.send({
            success: false,
            message: _context6.t0.message
          });

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // Save event by id

router.post('/saved-event/:id', authMiddleware, function _callee7(req, res) {
  var id, event;
  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          id = req.params.id;

          if (mongoose.Types.ObjectId.isValid(id)) {
            _context7.next = 4;
            break;
          }

          return _context7.abrupt("return", res.status(404).send('No event with that id'));

        case 4:
          _context7.next = 6;
          return regeneratorRuntime.awrap(Event.findById(id));

        case 6:
          event = _context7.sent;
          event.SaveEvent++;
          _context7.next = 10;
          return regeneratorRuntime.awrap(event.save());

        case 10:
          res.send({
            success: true,
            message: 'Event saved successfully',
            data: event
          });
          _context7.next = 16;
          break;

        case 13:
          _context7.prev = 13;
          _context7.t0 = _context7["catch"](0);
          res.send({
            success: false,
            message: _context7.t0.message
          });

        case 16:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 13]]);
});
module.exports = router;