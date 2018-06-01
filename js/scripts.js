$(document).ready(function(){

//
// Back end logic for determining survey results
//

$("#formSurvey").submit(function(event){
  event.preventDefault();
  $("#error-result").hide();
  $("#ruby-track").hide();
  $("#c-track").hide();
  $("#css-track").hide();
  $("#platypus").hide();

  var userFirstName = $("input#first-name").val();
  var userLastName = $("input#last-name").val();
  var firstInput = parseInt($("input:radio[name=first-question]:checked").val());
  var secondInput = parseInt($("input:radio[name=second-question]:checked").val());
  var thirdInput = parseInt($("input:radio[name=third-question]:checked").val());
  var fourthInput = parseInt($("input:radio[name=fourth-question]:checked").val());
  var fifthInput = parseInt($("input:radio[name=fifth-question]:checked").val());

  $(".result-full-name").text(userFirstName + " " + userLastName);
  $(".result-first-name").text(userFirstName);

  if (firstInput === 1 && secondInput === 1 && thirdInput === 1 ||
      firstInput === 1 && secondInput === 1 && fourthInput === 1 ||
      firstInput === 1 && thirdInput === 1 && fourthInput === 1 ||
      secondInput === 1 && thirdInput === 1 && fourthInput === 1) {
    $("#ruby-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 2 && secondInput === 2 && thirdInput === 2 ||
            firstInput === 2 && secondInput === 2 && fourthInput === 2 ||
            firstInput === 2 && thirdInput === 2 && fourthInput === 2 ||
            secondInput === 2 && thirdInput === 2 && fourthInput === 2) {
    $("#c-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 3 && secondInput === 3 && thirdInput === 3 ||
            firstInput === 3 && secondInput === 3 && fourthInput === 3 ||
            firstInput === 3 && thirdInput === 3 && fourthInput === 3 ||
            secondInput === 3 && thirdInput === 3 && fourthInput === 3) {
    $("#css-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 1 && secondInput === 1 ||
            firstInput === 1 && thirdInput === 1 ||
            firstInput === 1 && fourthInput === 1) {
    $("#ruby-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 2 && secondInput === 2 ||
            firstInput === 2 && thirdInput === 2 ||
            firstInput === 2 && fourthInput === 2) {
    $("#c-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 3 && secondInput === 3 ||
            firstInput === 3 && thirdInput === 3 ||
            firstInput === 3 && fourthInput === 3) {
    $("#css-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 1) {
    $("#ruby-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 2) {
    $("#c-track").fadeIn();
    $("#platypus").slideDown();
  } else if (firstInput === 3) {
    $("#css-track").fadeIn();
    $("#platypus").slideDown();
  } else {
    $("#error-result").show();
  }
});

//
// Front end logic for closing the results once opened
//

$(".close-results").click(function() {
  $("#ruby-track").fadeOut();
  $("#c-track").fadeOut();
  $("#css-track").fadeOut();
  $("#error-result").hide();
  $("#platypus").hide();
});

});
