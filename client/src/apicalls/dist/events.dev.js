"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.saveEvent = exports.GetAllEventsByCentral = exports.GetAllEventsByNorth = exports.GetAllEventsBySouthern = exports.GetEventById = exports.deleteEvent = exports.updateEvent = exports.GetAllEvent = exports.AddEvent = void 0;

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
}; //  update an event


exports.GetAllEvent = GetAllEvent;

var updateEvent = function updateEvent(payload) {
  var response;
  return regeneratorRuntime.async(function updateEvent$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post("/api/events/update-event", payload));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", _context3.t0.message);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; //  delete an event


exports.updateEvent = updateEvent;

var deleteEvent = function deleteEvent(payload) {
  var response;
  return regeneratorRuntime.async(function deleteEvent$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post("/api/events/delete-event", payload));

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", _context4.t0.message);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.deleteEvent = deleteEvent;

var GetEventById = function GetEventById(id) {
  var response;
  return regeneratorRuntime.async(function GetEventById$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/events/get-event-by-id/".concat(id)));

        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", _context5.t0.message);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.GetEventById = GetEventById;

var GetAllEventsBySouthern = function GetAllEventsBySouthern(southern) {
  var response;
  return regeneratorRuntime.async(function GetAllEventsBySouthern$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/events/get-event-by-district/southern"));

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", response.data);

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", _context6.t0.message);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.GetAllEventsBySouthern = GetAllEventsBySouthern;

var GetAllEventsByNorth = function GetAllEventsByNorth(north) {
  var response;
  return regeneratorRuntime.async(function GetAllEventsByNorth$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/events/get-event-by-district/north"));

        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", response.data);

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", _context7.t0.message);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.GetAllEventsByNorth = GetAllEventsByNorth;

var GetAllEventsByCentral = function GetAllEventsByCentral(central) {
  var response;
  return regeneratorRuntime.async(function GetAllEventsByCentral$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.get("/api/events/get-event-by-district/central"));

        case 3:
          response = _context8.sent;
          return _context8.abrupt("return", response.data);

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", _context8.t0.message);

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.GetAllEventsByCentral = GetAllEventsByCentral;

var saveEvent = function saveEvent(id) {
  var response;
  return regeneratorRuntime.async(function saveEvent$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return regeneratorRuntime.awrap(axiosInstance.post("/api/events/saved-event/".concat(id)));

        case 3:
          response = _context9.sent;
          return _context9.abrupt("return", response.data);

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", _context9.t0.message);

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.saveEvent = saveEvent;