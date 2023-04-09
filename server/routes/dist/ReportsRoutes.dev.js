"use strict";

var router = require("express").Router();

var authMiddleware = require("../middlewares/authMiddleware");

var Reports = require("../models/ReportsModel"); // add Reports


router.post("/add-report", authMiddleware, function _callee(req, res) {
  var newReports;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          newReports = new Reports(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(newReports.save());

        case 4:
          res.send({
            success: true,
            message: "Reports added successfully"
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
}); // get all Reports

router.get("/get-all-reports", authMiddleware, function _callee2(req, res) {
  var reports;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Reports.find().populate('owner').sort({
            createdAt: +1
          }));

        case 3:
          reports = _context2.sent;
          res.send({
            success: true,
            message: "Reports fetched successfully",
            data: reports
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
}); // get all Reports by owner

router.post("/get-all-reports-by-owner", authMiddleware, function _callee3(req, res) {
  var reports;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Reports.find({
            owner: req.body.owner
          }).sort({
            createdAt: +1
          }));

        case 3:
          reports = _context3.sent;
          res.send({
            success: true,
            message: "Reports fetched successfully",
            data: reports
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
}); // update Reports

router.post("/update-reports", authMiddleware, function _callee4(req, res) {
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Reports.findByIdAndUpdate(req.body.ReportsId, req.body));

        case 3:
          res.send({
            success: true,
            message: "Reports updated successfully"
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
}); // delete Reports

router.post("/delete-reports", authMiddleware, function _callee5(req, res) {
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Reports.findByIdAndDelete(req.body.ReportsId));

        case 3:
          res.send({
            success: true,
            message: "Reports deleted successfully"
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