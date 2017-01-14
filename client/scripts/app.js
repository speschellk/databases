// Constructor for an app object
var App = function(server) {
  this.server = server;
  this.friends = [];
};

var app = new App('http://localhost:3000/classes/messages');

// Instantiate the app and load 10 most recent messages
App.prototype.init = function() {
  app.clearMessages();
  // Load page with latest 10 chatters
  var onLoadData = {'order': '-createdAt', 'limit': '10'};
  app.fetch(onLoadData);
};

// Send user message to server
App.prototype.send = function(message) {
  $.ajax({
    url: this.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function() {
      console.log('Great success!', message);  
    }
  });
};

// Fetch user messages from the server
App.prototype.fetch = function(filter) {
  $.ajax({
    url: this.server,
    type: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    // come back and add limit
    data: filter,
    success: function(data) {
      for (var i = 0; i < data.results.length; i++) {
        var username = data.results[i].username;
        var text = data.results[i].text;

        // Encode username and text
        username = app.htmlEncode(username);
        text = app.htmlEncode(text);
        
        // Render message to the page
        app.renderMessage(username, text);
      }
    }
  });
};

// Encode messages to prevent XSS
App.prototype.htmlEncode = function(str) {
  var i = str.length;
  var aRet = [];

  while (i--) {
    var iC = str[i].charCodeAt();
    if (iC < 65 || iC > 127 || (iC > 90 && iC < 97)) {
      aRet[i] = '&#' + iC + ';';
    } else {
      aRet[i] = str[i];
    }
  }
  return aRet.join('');    
};

// Clear messages from the room
App.prototype.clearMessages = function() {
  $('#chats').empty();
};

// Post a message to the room
App.prototype.renderMessage = (username, text) => {
  $('#chats').append(
    `<li>
      <a href="#" class="username" data-username="${username}">${username}:</a>
      <p class="chatter">${text}</p>
    </li>`
  );
};

// Add a new room
App.prototype.renderRoom = function(room) {
  $('#roomSelect').append(
    `<option>${room}</option>`
  );
};

// Call send method and fetch new message when user clicks send button
App.prototype.handleSubmit = function() {
  var message = {
    username: window.location.search.slice(10),
    text: $('.message-input input').val(),
    roomname: $('#roomSelect option:selected').text()
  };
  app.send(message);
  // Clear text input
  $('.message-input input').val('');

  // Clear messages
  app.clearMessages();
  // Reload filtered messages
  app.fetch({'order': '-createdAt', 'limit': '10', 'where': '{"roomname": "' + message.roomname + '"}'});
};

// Post success message when username clicked
App.prototype.handleUsernameClick = function() {
  console.log('You made a friend!');
};










