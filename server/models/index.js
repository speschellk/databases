var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function (res) {
      db.query('select messages.id, messages.text, users.username, rooms.roomname from messages, users, rooms where users.id = messages.id_Users and rooms.id = messages.id_Rooms;', function(err, rows, fields) {
        if (!err) {
          console.log('model get function');
          console.log('rows from model: ', rows);
          res.send({results: rows});
          // return rows;
        } else {
          console.log('Error while performing query.');
        }
      });
    },
    // a function which can be used to insert a message into the database
    post: function (message) {
      db.query('INSERT into messages (text) values (' + message + ')', function(err, rows, fields) {
        if (!err) {
          console.log('Successfully inserted message into database');
        } else {
          console.log('Error while performing query.');
        }  
      });
    }
  }

  // users: {
  //   // Ditto as above.
  //   get: function () {
  //     db.query('SELECT * from users', function(err, rows, fields) {
  //       if (!err) {
  //         console.log('Users are: ', rows);
  //       } else {
  //         console.log('Error while performing query.');
  //       }
  //     });
  //   },
  //   post: function () {
  //     db.query('SELECT * from messages', function(err, rows, fields) {
  //       if (!err) {
  //         console.log('Messages are: ', rows);
  //       } else {
  //         console.log('Error while performing query.');
  //       }
  //     });
  //   }
  // }
};

