$(document).ready(function(){

//
// Back end logic for determining survey results
//

$("#formSurvey").submit(function(event){
  event.preventDefault();
  $("#rubyTrack").hide();
  $("#cTrack").hide();
  $("#cssTrack").hide();

  var userFirstName = $("input#first-name").val();
  var userLastName = $("input#last-name").val();
  var firstInput = parseInt($("input:radio[name=first-question]:checked").val());
  var secondInput = parseInt($("input:radio[name=second-question]:checked").val());
  var thirdInput = parseInt($("input:radio[name=third-question]:checked").val());
  var fourthInput = parseInt($("input:radio[name=fourth-question]:checked").val());
  var fifthInput = parseInt($("input:radio[name=fifth-question]:checked").val());

  $(".result-full-name").text(userFirstName + " " + userLastName);

  if (firstInput === 1) {
    $("#rubyTrack").fadeIn();
  } else if (firstInput === 2) {
    $("#cTrack").fadeIn();
  } else {
    $("#cssTrack").fadeIn();
  }
})


//
// Front end logic for closing the results once opened
//

$(".close-results").click(function() {
  $("#rubyTrack").fadeOut();
  $("#cTrack").fadeOut();
  $("#cssTrack").fadeOut();
});

});
