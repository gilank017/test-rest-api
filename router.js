"use strict";

module.exports = function (app) {
  var dataku = require("./controller");

  app.route("/").get(dataku.index);
  app.route("/list").get(dataku.listDataAll);
  app.route("/list/:id").get(dataku.listDataById);
};
