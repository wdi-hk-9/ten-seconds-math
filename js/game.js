// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var Game = function() {
  //------------------------------------------
  // Time
  //------------------------------------------
  this.TIME_LIMIT = 10;
  this.secondsLeft = this.TIME_LIMIT;
  this.timer = null;
  this.difficulty = 5;   // Determines how big numbers are
  this.problem = null;    // Current problem to solve
  this.score = 0;
  this.POINTS_add =5;
};

// Function to generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Game.prototype.genQuestions = function(){
  this.problem = {
    num1: this.rand(1,this.difficulty),
    num2: this.rand(1,this.difficulty)
  }
};

Game.prototype.checkResults = function (answer){
  if (answer== (this.problem.num1 + this.problem.num2)){
    this.score += this.POINTS_add;
    return true;
  } else {
    return false;
  }
}
