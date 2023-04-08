const express = require('express')
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());

const usersRoute = require("./routes/usersRoute");
const eventsRoute = require("./routes/eventsRoute")

app.use("/api/users", usersRoute)
app.use("/api/events", eventsRoute)



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`node JS Server is running on port ${port}`));
