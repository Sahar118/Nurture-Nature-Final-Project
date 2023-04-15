"use strict";

var mongoose = require('mongoose');

var messageSchema = new mongoose.Schema({
  chat: {
    type: mongoose.Schema.Types.ObjectId
  }
});