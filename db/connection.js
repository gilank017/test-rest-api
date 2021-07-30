var mysql = require("mysql");

//buat koneksi database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "dbtestapi",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Datamu wis koneksi mbeg database");
});

module.exports = connection;
