// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var Game = function() {
  this.TIME_LIMIT = 10;
  this.secondsLeft = this.TIME_LIMIT;
  this.timer = null;
  this.difficulty = 50;   // Determines how big numbers are
  this.problem = null;    // Current problem to solve
  this.score = 12;
};

// Generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// Generate random new problem
Game.prototype.newProblem = function() {
  var num1 = this.rand(1, this.difficulty);
  var num2 = this.rand(1, this.difficulty);

  this.problem = {
    num1: num1,
    num2: num2,
    solution: num1+num2
  };
};

// Generate random new problem
Game.prototype.checkSolution = function(guess) {
  return guess === this.problem.solution;
}
