$(function(){
  var game = new Game();

  game.newProblem();
  console.log(game.problem); // => {num1: 5, num2: 5}

  $('#num1').html(game.problem.num1);
  $('#num2').html(game.problem.num2);

  var checkSolution = function(){
    var guess = parseInt( $('#solution-input').val() );

    if (game.checkSolution(guess)) {
      console.log('right answer');
    } else {
      console.log('wrong answer');
    }
  };

  $('#solution-input').on('keyup', checkSolution);

});