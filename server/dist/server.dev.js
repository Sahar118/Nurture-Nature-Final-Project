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

var server = require("http").createServer(app);

var io = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"]
  }
});

app.use("/api/users", usersRoute);
app.use("/api/events", eventsRoute);
app.use("/api/reports", reportsRoute);
app.use("/api/chats", chatsRoute);
app.use('/api/messages', messagesRoute);
var port = process.env.PORT || 5000;

var path = require("path");

var _require = require('socket.io'),
    socket = _require.socket;

var _require2 = require('console'),
    log = _require2.log;

__dirname = path.resolve(); //  check the connection of socket  from client

io.on("connection", function (socket) {
  // socket events (new messages) will be here
  socket.on("join-room", function (userId) {
    socket.join(userId);
  }); //  send message to client ( who are present in the members array )

  socket.on("send-message", function (message) {
    if (message && message.members && message.members.length >= 2) {
      io.to(message.members[0]).to(message.members[1]).emit("receive-message", message);
    }
  });
}); // render deployment

if (process.env.NODE_ENV === "production") {
  app.use(express["static"](path.join(__dirname, "/client/build")));
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
  });
}

server.listen(port, function () {
  return console.log("node JS Server is running on port ".concat(port));
});