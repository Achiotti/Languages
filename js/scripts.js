
  $(document).ready(function() {
    $("#languageQuiz").submit(function(event) {
      event.preventDefault();

  var nameInput = $("input#userName").val();
  var levelInput = $("#ideal").val();
  var thinkingInput = $("#thinking").val();
  var hpHouseInput = $("input:radio[name=hpHouse]:checked").val();
  var moneyInput = $("#money").val();
  var musicInput = $("input:radio[name=music]:checked").val();

  if ((levelInput === "alot")  && (thinkingInput === "concrete") && (moneyInput === "trillions")) {
    var result = "C";
    $("#languageResult").text(result);
  
  
  $(".userName").text(nameInput);
  
  $(".showResult").show();
  });
});