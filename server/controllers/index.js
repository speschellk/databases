var models = require('../models');

module.exports = {
  messages: {
    // a function which handles a get request for all messages
    get: function (req, res) {
      console.log('controller get function');
      // call models.messages.get?
      res.send('hello working world');
    }, 
    // a function which handles posting a message to the database
    post: function (req, res) {
      console.log('controller post function');
      // call models.messages.post?
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

