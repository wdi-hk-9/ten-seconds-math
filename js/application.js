$(function(){
  var game = new Game();
  var score = 0;
  // console.log(game.rand(100,0));
  var randNum = parseInt(game.rand(100,0));
  console.log(randNum);

// Set Timer Starts
  var timer;
  var secondsLeft = 10;

  var everySecond = function(){
    console.log("Time left: " + secondsLeft--);
    $('#time-left').html(secondsLeft); // Update time
    if (secondsLeft <= 0) {
      clearInterval(timer);
      $('#solution-input').hide();
      alert("Game Over");
    }
  };

  var startTimer = function(){
    timer = setInterval(everySecond, 1000);
  };

  var addTime = function() {
    secondsLeft += 10;
  };
// Set Timer End

// Listener to check answer Starts
  var answerCheck = function () {
    var x = $('#solution-input').val();
      if (x == 12+8) {
        $('#solution-input').val('');
        addTime();
        console.log("Yeah");
        var html = ''
        html = "<p id=\"equation\" class=\"text-center\"> 1000+8 </p>";
        $('#equation').replaceWith(html);
        console.log(html)
        score = score + 5;
      } else if (x !== 12+8) {
        $('#solution-input').css('border-color', 'red');
        console.log("Wrong");
      };
  }
// Listener to check answer End

 $('#solution-input').on('click', startTimer);
 $('#solution-input').keyup(answerCheck);
});
