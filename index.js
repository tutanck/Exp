"use strict";

// Imports dependencies and set up http server
const express = require("express"),
  bodyParser = require("body-parser"),
  app = express() // creates express http server
    .use(bodyParser.json()) // support json encoded bodies
    .use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

// Sets server port and logs message on success
app.listen(process.env.PORT || 3009, () => console.log("App is listening"));
