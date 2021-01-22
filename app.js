const express = require("express");
const routes = require("./routes");

// App
const app = express();

app.use('/', routes);

module.exports = app;