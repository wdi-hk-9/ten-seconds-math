$(function(){
  var game = new Game();
  game.newProblem();

  $('#num1').html(game.problem.num1);
  $('#num2').html(game.problem.num2);
});