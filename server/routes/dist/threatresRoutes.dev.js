"use strict";

var router = require("express").Router();

var authMiddleware = require("../middlewares/authMiddleware");

var Theatre = require("../models/theartModel"); // add theatre


router.post("/add-theatre", authMiddleware, function _callee(req, res) {
  var newTheatre;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newTheatre = new Theatre(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newTheatre.save());

        case 4:
          res.send({
            success: true,
            message: "Theatre added successfully"
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
}); // get all theatres

router.get("/get-all-theatres", authMiddleware, function _callee2(req, res) {
  var theatres;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Theatre.find().populate('owner').sort({
            createdAt: -1
          }));

        case 3:
          theatres = _context2.sent;
          res.send({
            success: true,
            message: "Theatres fetched successfully",
            data: theatres
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
}); // get all theatres by owner

router.post("/get-all-theatres-by-owner", authMiddleware, function _callee3(req, res) {
  var theatres;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Theatre.find({
            owner: req.body.owner
          }).sort({
            createdAt: -1
          }));

        case 3:
          theatres = _context3.sent;
          res.send({
            success: true,
            message: "Theatres fetched successfully",
            data: theatres
          });
          _context3.next = 10;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          res.send({
            success: false,
            message: _context3.t0.message
          });

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}); // update theatre

router.post("/update-theatre", authMiddleware, function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Theatre.findByIdAndUpdate(req.body.theatreId, req.body));

        case 3:
          res.send({
            success: true,
            message: "Theatre updated successfully"
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
}); // delete theatre

router.post("/delete-theatre", authMiddleware, function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Theatre.findByIdAndDelete(req.body.theatreId));

        case 3:
          res.send({
            success: true,
            message: "Theatre deleted successfully"
          });
          _context5.next = 9;
          break;

        case 6:
          _context5.prev = 6;
          _context5.t0 = _context5["catch"](0);
          res.send({
            success: false,
            message: _context5.t0.message
          });

        case 9:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 6]]);
});
module.exports = router;