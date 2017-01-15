var models = require('../models');
var getUserIdAsync = models.users.getUserIdAsync;
var getRoomIdAsync = models.rooms.getRoomIdAsync;

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      models.messages.get(res);
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      var username = req.body.username;
      var text = req.body.text;
      var roomname = req.body.roomname;

      getUserIdAsync(username)
      .then((userId) => { return getRoomIdAsync(userId, roomname); })
      .then((idArray) => { return models.messages.post(text, idArray[0], idArray[1]); })
      .catch((err) => { console.log(err); });
    } 
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      console.log('user get function');
    },
    post: function (req, res) {
      console.log('user post function');
    }
  }
};

