$(function(){
  var game = new Game();

  console.log(game.rand(5,7));

  var timer;
  var secondsLeft = 10;

  var everySecond = function(){
    console.log("Time left: " + secondsLeft--);
    $('#time-left').html(secondsLeft); // Update time
    if (secondsLeft <= 0) {
      clearInterval(timer);
      console.log("Time's up!");
    }
  };

  var startTimer = function(){
    timer = setInterval(everySecond, 1000);
  };

  var addTime = function() {
    secondsLeft += 10;
  };

  $('#solution-input').on('click', startTimer);

});
