"use strict";

var express = require('express');

var app = express();
var router = express.Router();

require("dotenv").config();

var dbConfig = require("./config/dbConfig"); // define a middleware function


var myMiddleware = function myMiddleware(req, res, next) {
  console.log('Middleware executed');
  next();
}; // apply the middleware function to the router


router.use(myMiddleware); // define a route that uses the router

app.use('/api', router);

var usersRoute = require("./routes/usersRoute");

var eventsRoute = require("./routes/eventsRoute");

var reportsRoute = require("./routes/reportsRoute");

var chatsRoute = require("./routes/chatRoutes");

var messagesRoute = require('./routes/messagesRoute');

app.use(express.json());
app.use("/api/users", usersRoute);
app.use("/api/events", eventsRoute);
app.use("/api/reports", reportsRoute);
app.use("/api/chats", chatsRoute);
app.use('/api/messages', messagesRoute);
var port = process.env.PORT || 5000;

var path = require("path");

__dirname = path.resolve(); // render deployment

if (process.env.NODE_ENV === "production") {
  app.use(express["static"](path.join(__dirname, "/client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, function () {
  return console.log("node JS Server is running on port ".concat(port));
});