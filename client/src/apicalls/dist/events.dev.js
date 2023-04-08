"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetAllEvent = exports.AddEvent = void 0;

var _require = require("."),
    axiosInstance = _require.axiosInstance; //  add new event


var AddEvent = function AddEvent(payload) {
  var response;
  return regeneratorRuntime.async(function AddEvent$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post("/api/events/add-event", payload));

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
}; //  Get all events


exports.AddEvent = AddEvent;

var GetAllEvent = function GetAllEvent(payload) {
  var response;
  return regeneratorRuntime.async(function GetAllEvent$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/events/get-all-events", payload));

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

exports.GetAllEvent = GetAllEvent;