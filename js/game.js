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
  this.problem1 = null;    // Current problem to solve
  this.problem2 = null;
  //------------------------------------------
  // Score
  //------------------------------------------
  this.score = 0;
};

// Function to generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Game.prototype.genQuestions = function(){
    this.problem1 = this.rand(10,0);
    this.problem2 = this.rand(10,0);
};

Game.prototype.checkResults = function (){
  var x = $('#solution-input').val();
  if ((this.problem1 + this.problem2) == x){
    x = '';
    this.score = this.score + 5;
  }
}
