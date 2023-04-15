"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SetSelectedChat = exports.SetAllChats = exports.SetAllUsers = exports.SetUser = void 0;

var _toolkit = require("@reduxjs/toolkit");

var userSlice = (0, _toolkit.createSlice)({
  name: "users",
  initialState: {
    user: null,
    allUsers: [],
    allChats: [],
    selectedChat: null
  },
  reducers: {
    SetUser: function SetUser(state, action) {
      state.user = action.payload;
    },
    SetAllUsers: function SetAllUsers(state, action) {
      state.allUsers = action.payload;
    },
    SetAllChats: function SetAllChats(state, action) {
      state.allChats = action.payload;
    },
    SetSelectedChat: function SetSelectedChat(state, action) {
      state.selectedChat = action.payload;
    }
  }
});
var _userSlice$actions = userSlice.actions,
    SetUser = _userSlice$actions.SetUser,
    SetAllUsers = _userSlice$actions.SetAllUsers,
    SetAllChats = _userSlice$actions.SetAllChats,
    SetSelectedChat = _userSlice$actions.SetSelectedChat;
exports.SetSelectedChat = SetSelectedChat;
exports.SetAllChats = SetAllChats;
exports.SetAllUsers = SetAllUsers;
exports.SetUser = SetUser;
var _default = userSlice.reducer;
exports["default"] = _default;