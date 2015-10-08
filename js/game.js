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
  this.score = 12;
};

// Function to generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

//--------------------------------------------
// Timer
//--------------------------------------------
var timer;
var secondsLeft = 10;

var everySecond = function(){
  console.log("Time left: " + secondsLeft--);

  if (secondsLeft <= 0) {
    clearInterval(timer);
    console.log("Time's up!");
  }
};

var startTimer = function(){
  timer = setInterval(everySecond, 1000);
  setInterval(setCountdown, 1000);
};

var addTime = function() {
  secondsLeft += 10;
};

    /* Function to update countdown ----- should probably go in application.js but how to assign multiple functions to event handler? */
  function setCountdown() {
    $("#counter").html(secondsLeft  + " Seconds Left");
  }