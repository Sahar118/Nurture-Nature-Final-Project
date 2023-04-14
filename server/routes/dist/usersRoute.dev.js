"use strict";

var router = require('express').Router();

var User = require('../models/userModel');

var bcrypt = require('bcryptjs');

var jwt = require("jsonwebtoken");

var authMiddleware = require('../middlewares/authMiddleware'); //  Register a new user


router.post('/register', function _callee(req, res) {
  var userExists, salt, hashedPassword, newUser;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 3:
          userExists = _context.sent;

          if (!userExists) {
            _context.next = 6;
            break;
          }

          return _context.abrupt("return", res.send({
            success: false,
            message: "User already exists"
          }));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(bcrypt.genSalt(10));

        case 8:
          salt = _context.sent;
          _context.next = 11;
          return regeneratorRuntime.awrap(bcrypt.hash(req.body.password, salt));

        case 11:
          hashedPassword = _context.sent;
          req.body.password = hashedPassword; // Save the User:

          newUser = new User(req.body);
          _context.next = 16;
          return regeneratorRuntime.awrap(newUser.save());

        case 16:
          res.send({
            success: true,
            message: "User Created Successfully"
          });
          _context.next = 22;
          break;

        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          res.send({
            success: false,
            message: _context.t0.message
          });

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 19]]);
}); // Login a user 

router.post("/login", function _callee2(req, res) {
  var user, validPassword, token;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(User.findOne({
            email: req.body.email
          }));

        case 3:
          user = _context2.sent;

          if (user) {
            _context2.next = 6;
            break;
          }

          return _context2.abrupt("return", res.send({
            success: false,
            message: "User not found"
          }));

        case 6:
          _context2.next = 8;
          return regeneratorRuntime.awrap(bcrypt.compare(req.body.password, user.password));

        case 8:
          validPassword = _context2.sent;

          if (validPassword) {
            _context2.next = 11;
            break;
          }

          return _context2.abrupt("return", res.send({
            success: false,
            message: "Invalid password"
          }));

        case 11:
          //  create and assign a token
          token = jwt.sign({
            userId: user._id
          }, process.env.jwt_secret, {
            expiresIn: "1d"
          });
          res.send({
            success: true,
            message: " User Logged in successfully!",
            data: token
          });
          _context2.next = 18;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](0);
          res.send({
            success: false,
            message: _context2.t0.message
          });

        case 18:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 15]]);
}); //  get user details by id 

router.get("/get-current-user", authMiddleware, function _callee3(req, res) {
  var user;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(User.findById(req.body.userId).select("-password"));

        case 3:
          user = _context3.sent;
          res.send({
            success: true,
            message: "User details fetched successfully",
            data: user
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
}); // get all users except current user

router.get("/get-all-users", authMiddleware, function _callee4(req, res) {
  var allUsers;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(User.find({
            _id: {
              $ne: req.body.userId
            }
          }));

        case 3:
          allUsers = _context4.sent;
          res.send({
            success: true,
            message: "Users fetched successfully",
            data: allUsers
          });
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](0);
          res.send({
            success: false,
            message: _context4.t0.message
          });

        case 10:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
module.exports = router;