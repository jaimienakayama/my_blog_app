require("dotenv").config();
const mysql = require("mysql2");

const host = process.env.HOST;
const user = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const database = process.env.DATABASE;

const db = mysql.createConnection({
  host,
  user,
  password,
  database,
});

db.connect((err) => {
  err ? console.log(err) : console.log("successfully connected to db!");
});

module.exports = db;
