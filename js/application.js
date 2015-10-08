$(function(){
  var game = new Game(10);

  function restart() {
    game.newProblem();

    $('#num1').html(game.problem.num1);
    $('#num2').html(game.problem.num2);
    $('#solution-input').val('');
  }

  function countDown() {
    if (game.secondsLeft >= 0) {
      $('#secondsLeft').html(game.secondsLeft--);
    } else {
      gameOver();
    }
  }

  function checkSolution() {
    var guess = parseInt( $('#solution-input').val() );

    if (game.checkSolution(guess)) {
      game.addPoints();
      restart();

      if (!game.timer) {
        game.timer = setInterval(countDown, 1000);
      }
    }
  }

  function gameOver() {
    clearInterval(game.timer);
    $('#answer-box').fadeOut(800, function(){
      $('#score').html(game.score);
      $('#gameover-box').removeClass('hide').fadeIn(1200);
    });
  }

  $('#solution-input').on('keyup', checkSolution);
  restart();
});