"use strict";

var response = require("./rest");
var connection = require("./db/connection");

exports.index = function (req, res) {
  response.ok("Aplikasine Jalan Bos", res);
};
