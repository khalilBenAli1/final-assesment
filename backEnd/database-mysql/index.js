var mysql = require("mysql2");
var mysqlConfig = require("./config.js");

var connection = mysql.createConnection(mysqlConfig);
connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("connected to" + mysqlConfig.database);
  }
});

module.exports = {
  getAllUsers: (cb) => {
    connection.query(
      "SELECT * FROM clients;",
      function (error, result, fields) {
        cb(error, result);
      }
    );
  }, 
  transferMoney: (arr,cb) => {

    connection.query(
      `UPDATE clients SET balance=balance+? WHERE id=?`,arr,
      function (error, result, fields) {
        cb(error, result);
      }
    );
  },
  addUser: (arr,cb) => {
    connection.query(
      `INSERT INTO clients (name,balance,password)
      VALUES (?,?,?);`,arr,
      function (error, result, fields) {
        cb(error, result);
      }
    );
  },
  changeName: (arr,cb) => {
    connection.query(
      `UPDATE clients
      SET name = ?
      WHERE id=?`,arr,
      function (error, result, fields) {
        cb(error, result);
      }
    );
  },
  getUser:(arr,cb) => {
    connection.query("SELECT * FROM clients where name=?",arr,
      function (error, result, fields) {
        console.log(arr)
        cb(error, result);
      }
    );
  },
  deleteUser:(arr,cb) => {
    connection.query("DELETE FROM clients where id=?",arr,
      function (error, result, fields) {
        console.log(arr)
        cb(error, result);
      }
    );
  },
}
