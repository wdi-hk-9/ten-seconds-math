$(function(){
  var game = new Game(10);

  function restart() {
    game.newProblem();
    $('#num1').html(game.problem.num1);
    $('#num2').html(game.problem.num2);
    $('#solution-input').val('');
  }

  $('#solution-input').on('keyup', checkSolution);

  function checkSolution() {
    var guess = parseInt( $('#solution-input').val() );
    if (game.checkSolution(guess)) {
      game.addPoints();
      restart();
    }
  };

  restart();
});