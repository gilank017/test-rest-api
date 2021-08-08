"use strict";

var response = require("./rest");
var connection = require("./db/connection");

exports.index = function (req, res) {
  response.ok("Aplikasine Jalan Bos", res);
};

//nampilno data 
exports.listDataAll = function(req, res) {
  connection.query('SELECT * FROM product',function(error, rows, fields){
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res)
    }
  })
}

//nggolek data teko id ne
exports.listDataById = function(req,res) {
  let id = req.params.id
  connection.query('SELECT * FROM product WHERE id = ?', [id], function(error, rows, fields){
    if (error) {
      console.log(error)
    } else {
      response.ok(rows, res)
      console.log(rows,res)
    }
  })
}