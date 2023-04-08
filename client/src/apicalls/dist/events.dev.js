"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddEvent = void 0;

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
};

exports.AddEvent = AddEvent;