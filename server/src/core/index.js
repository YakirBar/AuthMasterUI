const signRoutes = require("./routes/sign.routes");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const port = 8000;

app.use(cookieParser());

app.use(express.json());

app.use(express.static("public"));

app.use(signRoutes);

module.exports = { app, port };