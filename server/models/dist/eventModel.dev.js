"use strict";

var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    "default": Date.now,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  SaveEvent: {
    type: Number,
    "default": '0'
  },
  poster: {
    type: String,
    required: true
  }
}, {
  timestamps: true
});
module.exports = mongoose.model('events', eventSchema);