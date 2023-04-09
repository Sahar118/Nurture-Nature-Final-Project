"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeleteReports = exports.UpdateReports = exports.GetAllReportsByOwner = exports.GetAllReports = exports.AddReports = void 0;

var _ = require(".");

// Add a new Reports
var AddReports = function AddReports(payload) {
  var response;
  return regeneratorRuntime.async(function AddReports$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/reports/add-report", payload));

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
}; // get all Reports


exports.AddReports = AddReports;

var GetAllReports = function GetAllReports() {
  var response;
  return regeneratorRuntime.async(function GetAllReports$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.get("/api/reports/get-all-reports"));

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
}; // get all Reports by owner


exports.GetAllReports = GetAllReports;

var GetAllReportsByOwner = function GetAllReportsByOwner(payload) {
  var response;
  return regeneratorRuntime.async(function GetAllReportsByOwner$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/reports/get-all-reports-by-owner", payload));

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
}; // update Reports


exports.GetAllReportsByOwner = GetAllReportsByOwner;

var UpdateReports = function UpdateReports(payload) {
  var response;
  return regeneratorRuntime.async(function UpdateReports$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/reports/update-reports", payload));

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
}; // delete Reports


exports.UpdateReports = UpdateReports;

var DeleteReports = function DeleteReports(payload) {
  var response;
  return regeneratorRuntime.async(function DeleteReports$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(_.axiosInstance.post("/api/reports/delete-reports", payload));

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
}; // // add show
// export const AddShow = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/reports/add-show",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };
// // get all shows
// export const GetAllShowsByTheatre = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/get-all-shows-by-theatre",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };
// // delete show
// export const DeleteShow = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/delete-show",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };
// // get all theatres for a movie
// export const GetAllTheatresByMovie = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/get-all-theatres-by-movie",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// };
// // get show by id
// export const GetShowById = async (payload) => {
//     try {
//         const response = await axiosInstance.post(
//             "/api/theatres/get-show-by-id",
//             payload
//         );
//         return response.data;
//     } catch (error) {
//         return error.response;
//     }
// }


exports.DeleteReports = DeleteReports;