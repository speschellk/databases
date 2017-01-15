var db = require('../db');
var Promise = require('bluebird');  


var getMessagesQueryString = 'SELECT messages.id, messages.text, users.username, rooms.roomname FROM messages INNER JOIN users ON users.id = messages.id_Users INNER JOIN rooms ON rooms.id = messages.id_Rooms ORDER BY messages.id DESC;';

var userIdQuery = 'SELECT users.id FROM users WHERE users.username = '; // +  newMessage.username + ';';
var roomIdQuery = 'SELECT rooms.id FROM rooms WHERE rooms.roomname = '; // newMessage.roomname;';

var postMessageQuery = 'INSERT INTO messages (text, id_users, id_rooms) VALUES ('; // text, userId, roomID );

module.exports = {
  messages: {
    get: function (res) {
      db.query(getMessagesQueryString, function(err, rows, fields) {
        if (!err) {
          res.send({results: rows});
        } else {
          console.log('Error while performing query.');
        }
      });
    },
    // a function which can be used to insert a message into the database
    post: function (text, userId, roomId) {
      var queryString = postMessageQuery + '\'' + text + '\'' + ', ' + userId + ', ' + roomId + ');';
      db.query(queryString, function(err, result) {
        if (err) { console.log(err); }
      });
    },
  },

  users: {
    getUserId: function(usernameString) {
      var queryString = userIdQuery + usernameString + ';';
      db.query(queryString, function(err, rows, fields) {
        if (!err) {
          return rows[0].id;
        } else {
          console.log('Error getting the userId');
        }
      });
    },

    getUserIdAsync: function(usernameString) {
      return new Promise(function(resolve, reject) {
        var queryString = userIdQuery + '\'' + usernameString + '\'' + ';';
        console.log(queryString);
        db.query(queryString, function(err, rows, fields) {
          if (err) {
            reject(err);
          } else {
            resolve(rows[0].id);
          }
        });
      });
    },

    get: function () {
      db.query('SELECT * from users', function(err, rows, fields) {
        if (!err) {
          console.log('Users are: ', rows);
        } else {
          console.log('Error while performing query.');
        }
      });
    },
    post: function () {
      db.query('SELECT * from messages', function(err, rows, fields) {
        if (!err) {
          console.log('Messages are: ', rows);
        } else {
          console.log('Error while performing query.');
        }
      });
    }
  },

  rooms: {
    getRoomId: function(roomnameString) {
      var queryString = roomIdQuery + roomnameString + ';';
      db.query(queryString, function(err, rows, fields) {
        if (!err) {
          return rows[0].id;
        } else {
          console.log('Error getting the userId');
        }
      });
    },

    getRoomIdAsync: function(userId, roomnameString) {
      return new Promise(function(resolve, reject) {
        var queryString = roomIdQuery + '\'' + roomnameString + '\'' + ';';
        db.query(queryString, function(err, rows, fields) {
          if (err) {
            reject(err);
          } else {
            resolve([userId, rows[0].id]);
          }
        });
      });
    }
  }
};

// module.exports.messagesGetAsync = Promise.promisify(module.exports.messages.get);

// module.exports.getUserIdAsync = Promise.promisify(module.exports.users.getUserId);

// var modelMessagesPost = function(message) {
//   return modelMessagesGetAsync(res)
//   .then((rows) => { return [rows, db.query(userId), db.query(roomId)]; })
//   .then((results) => { return db.query('INSERT INTO messages (text, id_users, id_rooms) VALUES (newMessage.text, userId, roomId); };
// };






