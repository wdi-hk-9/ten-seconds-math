$(function(){
  var game = new Game();

  var nextQuestion = function() {
      game.newProblem();
      $('#num1').html(game.problem.num1);
      $('#num2').html(game.problem.num2);
      $('#solution-input').val('');
  }

  var checkSolution = function(){
    var guess = parseInt( $('#solution-input').val() );

    if (game.checkSolution(guess)) {
      nextQuestion();
      console.log("points: " + game.score)
    } else {
      console.log('wrong answer');
    }
  };

  nextQuestion();

  $('#solution-input').on('keyup', checkSolution);

});