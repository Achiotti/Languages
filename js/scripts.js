
  $(document).ready(function() {
    $("#languageQuiz").submit(function(event) {
      event.preventDefault();

  var nameInput = $("input#userName").val();

  
  
  $(".userName").text(nameInput);



  $(".showResult").show();
  });
});