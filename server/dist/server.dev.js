"use strict";

var express = require('express');

var app = express();

require("dotenv").config();

var dbConfig = require("./config/dbConfig");

app.use(express.json());

var usersRoute = require("./routes/usersRoute");

var eventsRoute = require("./routes/eventsRoute");

app.use("/api/users", usersRoute);
app.use("/api/events", eventsRoute);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("node JS Server is running on port ".concat(port));
});