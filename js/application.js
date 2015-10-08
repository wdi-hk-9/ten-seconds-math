$(function(){
  var game = new Game();
  game.newProblem();

  $('#num1').html(game.problem.num1);
  $('#num2').html(game.problem.num2);

  $('#solution-input').on('keyup', checkSolution);

  function checkSolution() {
    var guess = parseInt( $('#solution-input').val() );
    console.log(game.checkSolution(guess));
  };

});