var db = require('../db');

module.exports = {
  messages: {
    // a function which produces all the messages
    get: function () {
      db.query('SELECT * from messages', function(err, rows, fields) {
        if (!err) {
          console.log('Messages are: ', rows);
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

