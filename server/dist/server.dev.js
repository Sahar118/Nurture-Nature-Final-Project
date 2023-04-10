"use strict";

var express = require('express');

var app = express();
var router = express.Router();

require("dotenv").config();

var dbConfig = require("./config/dbConfig");

app.use(express.json()); // define a middleware function

var myMiddleware = function myMiddleware(req, res, next) {
  console.log('Middleware executed');
  next();
}; // apply the middleware function to the router


router.use(myMiddleware); // define a route that uses the router

app.use('/api', router);

var usersRoute = require("./routes/usersRoute");

var eventsRoute = require("./routes/eventsRoute");

var reportsRoute = require("./routes/reportsRoute");

app.use("/api/users", usersRoute);
app.use("/api/events", eventsRoute);
app.use("/api/reports", reportsRoute);
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("node JS Server is running on port ".concat(port));
});