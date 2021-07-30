"use strict";

module.exports = function (app) {
  var dataku = require("./controller");

  app.route("/").get(dataku.index);
};
