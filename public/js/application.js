$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
    var user_input = $(this).serialize();
    $.post('/grandma', user_input, function(response){
      $('body').html(response);
    });
  })
});
