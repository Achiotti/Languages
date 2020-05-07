
  $(document).ready(function() {
    $("#languageQuiz").submit(function(event) {
      event.preventDefault();

  var nameInput = $("input#userName").val();
  var levelInput = $("#level").val();
  // var thinkingInput = $("#thinking").val();
  // // var hpHouseInput = $("input:radio[name=hpHouse]:checked").val();
  // var moneyInput = $("#money").val();
  // var musicInput = $("input:radio[name=music]:checked").val();

  if (levelInput === "alot") { 
    var result = "C";
  } else if (levelInput === "little") {
    var result = "Python";
  } else if (levelInput === "none") {
    var result = "Java";
  }  

$("showResult").click(function(){
  $("." + this.className).toggle();
});

  $("#languageResult").text(result);
 

  $("#userName").text(nameInput);
  $("#showResult").show();
  });
});


