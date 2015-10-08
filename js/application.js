$(function(){
  var game = new Game();

  var numA;
  var numB;

  // Document focus on input box
  $("#solution-input").focus();

  // Listen for user keydown, which activates timer and starts countdown
  $("#solution-input").one("keydown", console.log("once"));

  // Function to set new equation
  function setEquation() {
    numA = game.rand(5,15);
    numB = game.rand(5,15);
    $("#equation").html(numA + " + " + numB);
  }

  // Function to listen for Return keypress (e.which == 13), and check input versus solution
  function checkSolution() {
    $("#solution-input").on("keypress", function(e) {
      e.preventDefault();
      if (e.which == 13) {
        var userInput = parseFloat($("#solution-input").val());
        if (userInput != numA + numB) {
          console.log("incorrect")
         // $("#solution-input").css("border-color", "red");
        }
        else {
          console.log("correct")
          /*
          $("form")[0].reset();
          addTime();
          setEquation();
          */
        }
      }
    });
  }
  setEquation();

  checkSolution();

});