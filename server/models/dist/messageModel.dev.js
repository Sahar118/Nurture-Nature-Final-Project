"use strict";

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "chats"
  },
  sender: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  text: {
    type: String,
    required: true
  },
  read: {
    type: Boolean,
    required: false
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('messages', messageSchema);