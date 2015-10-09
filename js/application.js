$(function(){
  var timer;
  var game = new Game();

  game.genQuestions();

  var nextQuestion = function (){
    game.genQuestions();
    var html = "<p id=\"equation\" class=\"text-center\">" + game.problem.num1 + ' + ' + game.problem.num2 + "</p>";
    $('#equation').replaceWith(html);
    $('#solution-input').val('');
  };

  var checkResults = function(){
    var answer = parseInt($('#solution-input').val());
    if(game.checkResults(answer)){
      $('#solution-input').removeClass('solution-error');
      nextQuestion();
      if (!timer){
        timer = setInterval(everySecond, 1000);
      }
    } else {
      $('#solution-input').addClass('solution-error');
    }
  };

  nextQuestion();
  $('#solution-input').on('keyup' , checkResults);

// Set Timer Starts

  var secondsLeft = 10;

  var everySecond = function(){
    console.log("Time left: " + secondsLeft--);
    $('#time-left').html(secondsLeft); // Update time
    if (secondsLeft <= 0) {
      clearInterval(timer);
      $('#solution-input').hide();
      alert("Game Score:  " + game.score);
    }
  };

  var startTimer = function(){
    timer = setInterval(everySecond, 1000);
  };

  var addTime = function() {
    secondsLeft += 10;
  };
// Set Timer End

});
