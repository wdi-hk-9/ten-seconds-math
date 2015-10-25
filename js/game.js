// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

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
  this.score = 0;
}

  // Function to do countdown every second
  Game.prototype.everySecond = function () {
    console.log("Time left: " + this.secondsLeft--);
    $("#counter").html(this.secondsLeft  + " Seconds Left");

    if (this.secondsLeft <= 0) {
      clearInterval(this.timer);
      console.log("Time's up!");
    }
  };

  Game.prototype.startTimer = function () {
    this.timer = setInterval(this.everySecond, 1000);
  };

  Game.prototype.addTime = function () {
    this.secondsLeft += 10;
  };

  // Function to generate random numbers in an interval
  Game.prototype.rand = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

