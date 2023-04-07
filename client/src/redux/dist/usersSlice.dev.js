"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SetUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var usersSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: {
    user: null
  },
  reducers: {
    SetUser: function SetUser(state, action) {
      state.user = action.payload;
    }
  }
});
var SetUser = usersSlice.actions.SetUser;
exports.SetUser = SetUser;
var _default = usersSlice.reducer;
exports["default"] = _default;