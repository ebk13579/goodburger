var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "enqhzd10cxh7hv2e.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "hr6ajrymkwrj9qwa",
  password: "wpgw3ilcgbkpombs",
  database: "m1ms9lra2p8ftglk"
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;