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


app.use("/api/users", usersRoute)
app.use("/api/events", eventsRoute)
app.use("/api/reports", reportsRoute);




const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`node JS Server is running on port ${port}`));
