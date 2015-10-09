// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
/*'use strict';

var Game = function() {
  //------------------------------------------
  // Time
  //------------------------------------------
  // Default value for time
  this.TIME_LIMIT = 10;
  // Current seconds left
  this.secondsLeft = this.TIME_LIMIT;
  // Reference to timer Interval
  this.timer = null;

  //------------------------------------------
  // Problems
  //------------------------------------------
  this.difficulty = 50;   // Determines how big numbers are
  this.problem = null;    // Current problem to solve

  //------------------------------------------
  // Score
  //------------------------------------------
  this.score = 12;
};

// Function to generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};*/

$(document).ready(function(){
'use strict';
var result = null;
var timer;
var secondsLeft = 10;

  //random number to apear
  var random = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  console.log(random(0,50));

  //timer
  function timer(){
    var everySecond = function(){
      var msg = secondsLeft-- + " seconds left";
      $('#counter').html(msg);

      if (secondsLeft <= 0) {
        clearInterval(timer);
        $('#counter').html("Time's up!");
      }
    };

    var startTimer = function(){
      timer = setInterval(everySecond, 1000);
    };

    var addTime = function() {
      secondsLeft += 10;
    };
    startTimer()
  }

  //check if math resultSum = #solution-input
  function check(){
    var userInput = parseFloat($('#solution-input').val());
    if (result == userInput){
      console.log("You got it right")
      timer();

      //set random number
      $('#equation1').html(random(0,10));
      $('#equation2').html(random(0,10));

      //clears input
      $('form')[0].reset();

      //add 10 seconds to timer


      } else {
      console.log("try again")
      }
    console.log("user input: " + userInput)
  }

  //math problem
  function resultSum(){
    var value1 = parseFloat($('#equation1').html());
    var value2 = parseFloat($('#equation2').html());
    result = value1 + value2;
    console.log(result);
  }

  function updateAll(e){
    resultSum(e)
    check(e);
  }

  //event listenter to on keyup
  function bindInput () {
    $('#solution-input').on("keyup", updateAll);
  }
//calls bindInput
bindInput();

});
