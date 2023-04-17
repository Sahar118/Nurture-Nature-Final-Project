const express = require('express')
const app = express();
const router = express.Router();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");

// define a middleware function
const myMiddleware = (req, res, next) => {
    console.log('Middleware executed');
    next();
};

// apply the middleware function to the router
router.use(myMiddleware);

// define a route that uses the router
app.use('/api', router);
const usersRoute = require("./routes/usersRoute");
const eventsRoute = require("./routes/eventsRoute")
const reportsRoute = require("./routes/reportsRoute");
const chatsRoute = require("./routes/chatRoutes")
const messagesRoute = require('./routes/messagesRoute')
app.use(express.json());

const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
})

app.use("/api/users", usersRoute)
app.use("/api/events", eventsRoute)
app.use("/api/reports", reportsRoute);
app.use("/api/chats", chatsRoute);
app.use('/api/messages', messagesRoute);

const port = process.env.PORT || 5000;
const path = require("path");
const { socket } = require('socket.io');
const { log } = require('console');
__dirname = path.resolve();

//  check the connection of socket  from client
io.on("connection", (socket) => {
    // socket events (new messages) will be here
    socket.on("join-room", (userId) => {
        socket.join(userId)
    })
    //  send message to client ( who are present in the members array )
    socket.on("send-message", (message) => {
        if (message && message.members && message.members.length >= 2) {
            io.to(message.members[0])
                .to(message.members[1])
                .emit("receive-message", message);
        }
    });

    //  clear unread messages
    socket.on("clear-unread-messages", (data) => {
        io.to(data.members[0])
            .to(data.members[1])
            .emit("unread-messages-cleared", data)
    })
});


// render deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}
server.listen(port, () => console.log(`node JS Server is running on port ${port}`));
