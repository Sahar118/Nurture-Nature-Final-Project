const express = require('express')
const app = express();
const router = express.Router();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());


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


app.use("/api/users", usersRoute)
app.use("/api/events", eventsRoute)
app.use("/api/reports", reportsRoute);
app.use("/api/chats", chatsRoute);





const port = process.env.PORT || 5000;
const path = require("path");
__dirname = path.resolve();


// render deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/client/build")));
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "client", "build", "index.html"));
    });
}


app.listen(port, () => console.log(`node JS Server is running on port ${port}`));
