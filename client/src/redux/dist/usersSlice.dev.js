"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SetAllUsers = exports.SetUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var usersSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: {
    user: null,
    allUsers: []
  },
  reducers: {
    SetUser: function SetUser(state, action) {
      state.user = action.payload;
    },
    SetAllUsers: function SetAllUsers(state, action) {
      state.allUsers = action.payload;
    }
  }
});
var _usersSlice$actions = usersSlice.actions,
    SetUser = _usersSlice$actions.SetUser,
    SetAllUsers = _usersSlice$actions.SetAllUsers;
exports.SetAllUsers = SetAllUsers;
exports.SetUser = SetUser;
var _default = usersSlice.reducer;
exports["default"] = _default;