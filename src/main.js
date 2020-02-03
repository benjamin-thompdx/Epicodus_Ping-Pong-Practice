// User Interface Logic for importing pingPong() from ping-pong.js 

//--> This import statement consists of a few key things: what we are importing from ping-pong.js (the pingPong function) and where we are importing it from. We need the path and file name. Since the file is in the same directory, it's easy to access.

import { pingPong } from './ping-pong';

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});