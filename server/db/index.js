// Create a database exports.connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var express = require('express');
var mysql = require('mysql');
// var app = require('../app');

exports.connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'chat'
});

// exports.connection.connect(function(err) {
//   if (!err) {
//     console.log('Database is connected ... nn');    
//   } else {
//     console.log('Error connecting database ... nn');    
//   }
// });

// exports.connection.query('INSERT into users (username) values ("Stan")', function(err, rows, fields) {
//   if (!err) {
//     console.log('Inserted new user Stan');
//   } else {
//     console.log('Error while performing query.');
//   }  
// });

// exports.connection.query('INSERT into users (username) values ("Jamal")', function(err, rows, fields) {
//   if (!err) {
//     console.log('Inserted new user Jamal');
//   } else {
//     console.log('Error while performing query.');
//   }  
// });

// exports.connection.query('INSERT into users (username) values ("SuperDan")', function(err, rows, fields) {
//   if (!err) {
//     console.log('Inserted new user SuperDan');
//   } else {
//     console.log('Error while performing query.');
//   }  
// });

// exports.connection.query('INSERT into users (username) values ("allTheGoats")', function(err, rows, fields) {
//   if (!err) {
//     console.log('Inserted new user allTheGoats');
//   } else {
//     console.log('Error while performing query.');
//   }  
// });

// exports.connection.query('SELECT * from users', function(err, rows, fields) {
//   if (!err) {
//     console.log('There are: ', rows);
//   } else {
//     console.log('Error while performing query.');
//   }
// });

