const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//parse app/json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//panggil routes
var router = require("./router");
router(app);

app.listen(8080, () => {
  console.log(`Server Jalan Bos`);
});
