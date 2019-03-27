var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tc_test"
});

db.connect(function (err) {
    if (err) throw err;
    console.log("DB Connected!");
});

module.exports = db;