$(function(){
  var game = new Game();

  var questions = function(a,b){
    var html = "<p id=\"equation\" class=\"text-center\">" + a + ' + ' + b + "</p>";
    $('#equation').replaceWith(html);
};
  game.genQuestions();
  questions(game.problem.num1 , game.problem.num2);
  $('#solution-input').on('keyup' , function(){
    var answer = $('#solution-input').val();
    if(game.checkResults(answer)){
      console.log("Yeah");
    } else {
      console.log("Stupid");
    }
  });


// Set Timer Starts
  var timer;
  var secondsLeft = 10;

  var everySecond = function(){
    console.log("Time left: " + secondsLeft--);
    $('#time-left').html(secondsLeft); // Update time
    if (secondsLeft <= 0) {
      clearInterval(timer);
      $('#solution-input').hide();
      alert("Game Over");
    }
  };

  var startTimer = function(){
    timer = setInterval(everySecond, 1000);
  };

  var addTime = function() {
    secondsLeft += 10;
  };
// Set Timer End

//Check answer Starts
  var answerCheck = function () {
    var x = $('#solutiosn-input').val();
      if ((game.problem1 + game.problem2) == x) {
        x = ''; //reset input
        addTime();
        console.log("Yeah")
      } else if (x !== 12+8) {
        $('#solution-input').css('border-color', 'red');
      };
  }
//Check answer End

  $('#solution-input').on('click', startTimer);

});
