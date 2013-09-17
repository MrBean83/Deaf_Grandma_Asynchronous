$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var user_input = $(this).serialize();
    console.log(user_input);
    $.post('/grandma', user_input, function(response){
      console.log(response);
    });
  })
});
