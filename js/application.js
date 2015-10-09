$(function(){
  var timer;
  var game = new Game();

  var nextQuestion = function(init) {
      game.newProblem();
      $('#num1').html(game.problem.num1);
      $('#num2').html(game.problem.num2);
      $('#solution-input').val('');
      if (!init) { game.extraTime(); }
  }

  var everySecond = function() {
    if (game.secondsLeft > 0) {
      $('#seconds-left').html( game.secondsLeft-- );
    } else {
      $('#seconds-left').html( game.secondsLeft-- );
      clearInterval(timer);
      alert('Game over. Score: ' + game.score);
    }
  };

  var checkSolution = function(){
    var guess = parseInt( $('#solution-input').val() );

    if (game.checkSolution(guess)) {
      $('#solution-input').removeClass('solution-error');
      nextQuestion();
      if (!timer) {timer = setInterval(everySecond, 1000); }
    } else {
      $('#solution-input').addClass('solution-error');
    }
  };

  nextQuestion(1);

  $('#solution-input').on('keyup', checkSolution);

});