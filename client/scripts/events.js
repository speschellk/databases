$(document).ready(function() {
  // Load initial messages
  app.init();

  // ADD NEW MESSAGE
  // Create message object upon click of submit button
  $('button').on('click', function() {
    app.handleSubmit();
  });

  // ADD FRIENDS
  // When click username
  $('#chats').on('click', 'a', function(event) {
    event.preventDefault();

    // Add username to app.friends
    var username = this.getAttribute('data-username');

    if (!app.friends.includes(username)) {
      app.friends.push(username);
      // Update the css on the feed for an added friend
      $(`[data-username="${username}"]`).addClass('friended');
      console.log('added friend', username, app.friends);
    } else {
      var i = app.friends.indexOf(username);
      app.friends.splice(i, 1);
      // Update the css on the feed for a removed friend
      $(`[data-username="${username}"]`).removeClass('friended');
      console.log('removed friend', username, app.friends);
    }
  });

  // SWITCH ROOMS
  // Create an event on 'change' that triggers when dropdown is updated
  $('#roomSelect').on('change', function() {
    var selected = this.value;
    // Clear messages
    app.clearMessages();
    // Reload filtered messages
    app.fetch({'order': '-createdAt', 'limit': '10', 'where': '{"roomname": "' + selected + '"}'});
  });

  // ADD NEW ROOM
  // Add a room to dropdown when click new room
  $('.create-room').on('click', function() {
    $(this).addClass('hidden');
    $('.create-room-input').removeClass('hidden');
  });

  $('.room-btn').on('click', function() {
    var newRoom = $('.create-room-input input').val();
    app.renderRoom(newRoom);

    // Hide input box and submit button
    $('.create-room-input').addClass('hidden');
    // Show create new room link again
    $('.create-room').removeClass('hidden');
  });



});





























