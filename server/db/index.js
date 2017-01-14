// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".


var express = require('express');
var mysql = require('mysql');
var app = require('../app');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

connection.connect(function(err) {
  if (!err) {
    console.log('Database is connected ... nn');    
  } else {
    console.log('Error connecting database ... nn');    
  }
});

app.get('/', function(req, res) {
  connection.query('SELECT * from users LIMIT 2', function(err, rows, fields) {
    connection.end();
    if (!err) {
      console.log('The solution is: ', rows);
    } else {
      console.log('Error while performing Query.');
    }
  });
});

app.listen(3000);
