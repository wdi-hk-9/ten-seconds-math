$(function(){
  var game = new Game();

  var numA;
  var numB;

  // Hide "Game Over" banner
  $("#gameover-box").hide();

  // Function to show new equation (change hard code numbers)
  function setEquation() {
    numA = game.rand(5,15);
    numB = game.rand(5,15);
    $("#equation").html(numA + " + " + numB);
  }

  // Function to listen for Input keyup, and check input vs solution; timer
  function checkSolution() {
    $("#solution-input").on("keyup", function() {
        var userInput = parseFloat($("#solution-input").val());

        if (userInput != numA + numB) {
          $("#solution-input").css("border-color", "red");
        }
        else {
          // unset border of input box
          $("#solution-input").css("border", "none");

          $("form")[0].reset();
          game.addTime();
          setEquation();
          game.score += 5;
          checkTimer();
        }

        // When timer hits zero
        if (game.secondsLeft <= 0) {
          $("#solution-input").hide();
          $("#gameover-box").unhide();
        }
      })
    };

  // Function to check whether timer is going; if not, activate
  var functionCalled = false;
  function checkTimer() {
    if (!functionCalled) {
      console.log("started timer");
      game.startTimer();
      functionCalled = true;
    }
  }

  // Calling functions to run game
  setEquation();

  checkSolution();

});