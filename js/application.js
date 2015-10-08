$(function(){
  var timer;
  var SECONDS    = 10;
  var DIFFICULTY = 10;

  var game = new Game(DIFFICULTY, SECONDS);

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

      if (!timer) {
        timer = setInterval(countDown, 1000);
      } else {
        game.moreSeconds();
      }
    }
  }

  function gameOver() {
    clearInterval( timer);
    $('#answer-box').fadeOut(800, function(){
      $('#score').html(game.score);
      $('#gameover-box').removeClass('hide').fadeIn(1200);
    });
  }

  function resetGame() {
    game = new Game(DIFFICULTY, SECONDS);

    $('#gameover-box').fadeOut(800, function(){
      $('#secondsLeft').html(game.secondsLeft);
      $('#answer-box').removeClass('hide').fadeIn(1200);
    });

    restart();

  }

  $('#solution-input').on('keyup', checkSolution);
  $('#restart-btn').on('click', resetGame);

  $('#secondsLeft').html(game.secondsLeft);
  restart();
});