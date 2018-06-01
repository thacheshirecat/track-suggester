$(document).ready(function(){

$("#formSurvey").submit(function(event){
  event.preventDefault();

  var userFirstName = $("input#first-name").val();
  var userLastName = $("input#last-name").val();
  var firstInput = parseInt($("input:radio[name=first-question]:checked").val());
  var secondInput = parseInt($("input:radio[name=second-question]:checked").val());
  var thirdInput = parseInt($("input:radio[name=third-question]:checked").val());
  var fourthInput = parseInt($("input:radio[name=fourth-question]:checked").val());
  var fifthInput = parseInt($("input:radio[name=fifth-question]:checked").val());


})



});
