$(document).ready(function() {

  //highlights ingredients obtained
  $('#ingredients ul li').click(function() {
    //check if item is highlighted
    var hasIt = $(this).hasClass("got");

    if (hasIt) {
      $(this).removeClass("got");
    } else {
      $(this).addClass("got");
    }
  });

  //highlights completed tasks
  $('#instructions ol li').click(function() {
    //check if item is highlighted
    var completed = $(this).hasClass("completed");

    if (completed) {
      $(this).removeClass("completed");
    } else {
      $(this).addClass("completed");
    }
  });
  
  //hides images
  $('#hide-images button').click(function() {
    $(".images").toggle();
  });
});