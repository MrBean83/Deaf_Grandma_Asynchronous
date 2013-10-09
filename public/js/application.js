$(document).ready(function() {
  $('.grandmaform').submit(function(event) {
    event.preventDefault();

    console.log("We're past event preventDefault")
    
    var user_input = $(this).serialize();
    console.log(user_input);
  
    $.post("/grandma", user_input, function(response){
      console.log(response);
    $("#grandma-says").html(response);

    });
  });
});
