const express = require("express");
const path = require("path");

const indexRouter = require("./routes/index.routes");

const app = express();

app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// Middleware to parse JSON data
app.use(express.json());

app.use("/", indexRouter);

module.exports = app;
