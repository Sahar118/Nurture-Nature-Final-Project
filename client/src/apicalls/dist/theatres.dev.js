"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetShowById = exports.GetAllTheatresByMovie = exports.DeleteShow = exports.GetAllShowsByTheatre = exports.AddShow = exports.DeleteTheatre = exports.UpdateTheatre = exports.GetAllTheatresByOwner = exports.GetAllTheatres = exports.AddTheatre = void 0;

var _ = require(".");

// Add a new theatre
var AddTheatre = function AddTheatre(payload) {
  var response;
  return regeneratorRuntime.async(function AddTheatre$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/add-theatre", payload));

        case 3:
          response = _context.sent;
          return _context.abrupt("return", response.data);

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", _context.t0.response);

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // get all theatres


exports.AddTheatre = AddTheatre;

var GetAllTheatres = function GetAllTheatres() {
  var response;
  return regeneratorRuntime.async(function GetAllTheatres$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.get("/api/theatres/get-all-theatres"));

        case 3:
          response = _context2.sent;
          return _context2.abrupt("return", response.data);

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", _context2.t0.response);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // get all theatres by owner


exports.GetAllTheatres = GetAllTheatres;

var GetAllTheatresByOwner = function GetAllTheatresByOwner(payload) {
  var response;
  return regeneratorRuntime.async(function GetAllTheatresByOwner$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/get-all-theatres-by-owner", payload));

        case 3:
          response = _context3.sent;
          return _context3.abrupt("return", response.data);

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", _context3.t0.response);

        case 10:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // update theatre


exports.GetAllTheatresByOwner = GetAllTheatresByOwner;

var UpdateTheatre = function UpdateTheatre(payload) {
  var response;
  return regeneratorRuntime.async(function UpdateTheatre$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/update-theatre", payload));

        case 3:
          response = _context4.sent;
          return _context4.abrupt("return", response.data);

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", _context4.t0.response);

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // delete theatre


exports.UpdateTheatre = UpdateTheatre;

var DeleteTheatre = function DeleteTheatre(payload) {
  var response;
  return regeneratorRuntime.async(function DeleteTheatre$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/delete-theatre", payload));

        case 3:
          response = _context5.sent;
          return _context5.abrupt("return", response.data);

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", _context5.t0.response);

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // add show


exports.DeleteTheatre = DeleteTheatre;

var AddShow = function AddShow(payload) {
  var response;
  return regeneratorRuntime.async(function AddShow$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/add-show", payload));

        case 3:
          response = _context6.sent;
          return _context6.abrupt("return", response.data);

        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", _context6.t0.response);

        case 10:
        case "end":
          return _context6.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // get all shows


exports.AddShow = AddShow;

var GetAllShowsByTheatre = function GetAllShowsByTheatre(payload) {
  var response;
  return regeneratorRuntime.async(function GetAllShowsByTheatre$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/get-all-shows-by-theatre", payload));

        case 3:
          response = _context7.sent;
          return _context7.abrupt("return", response.data);

        case 7:
          _context7.prev = 7;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", _context7.t0.response);

        case 10:
        case "end":
          return _context7.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // delete show


exports.GetAllShowsByTheatre = GetAllShowsByTheatre;

var DeleteShow = function DeleteShow(payload) {
  var response;
  return regeneratorRuntime.async(function DeleteShow$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/delete-show", payload));

        case 3:
          response = _context8.sent;
          return _context8.abrupt("return", response.data);

        case 7:
          _context8.prev = 7;
          _context8.t0 = _context8["catch"](0);
          return _context8.abrupt("return", _context8.t0.response);

        case 10:
        case "end":
          return _context8.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // get all theatres for a movie


exports.DeleteShow = DeleteShow;

var GetAllTheatresByMovie = function GetAllTheatresByMovie(payload) {
  var response;
  return regeneratorRuntime.async(function GetAllTheatresByMovie$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/get-all-theatres-by-movie", payload));

        case 3:
          response = _context9.sent;
          return _context9.abrupt("return", response.data);

        case 7:
          _context9.prev = 7;
          _context9.t0 = _context9["catch"](0);
          return _context9.abrupt("return", _context9.t0.response);

        case 10:
        case "end":
          return _context9.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // get show by id


exports.GetAllTheatresByMovie = GetAllTheatresByMovie;

var GetShowById = function GetShowById(payload) {
  var response;
  return regeneratorRuntime.async(function GetShowById$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          _context10.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/theatres/get-show-by-id", payload));

        case 3:
          response = _context10.sent;
          return _context10.abrupt("return", response.data);

        case 7:
          _context10.prev = 7;
          _context10.t0 = _context10["catch"](0);
          return _context10.abrupt("return", _context10.t0.response);

        case 10:
        case "end":
          return _context10.stop();
      }
    }
  }, null, null, [[0, 7]]);
};

exports.GetShowById = GetShowById;