var Game = function() {
  this.TIME_LIMIT = 10;
  this.POINTS_ADD = 5;
  this.secondsLeft = 0;
  this.difficulty = 5;   // Determines how big numbers are
  this.problem = null;    // Current problem to solve
  this.score = 0;
};

// Function to generate random numbers in an interval
Game.prototype.rand = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

Game.prototype.newProblem = function() {
  this.problem = {
    num1: this.rand(1, this.difficulty),
    num2: this.rand(1, this.difficulty)
  };
};

Game.prototype.checkSolution = function(guess){
  if (guess === this.problem.num1 + this.problem.num2) {
    this.score += this.POINTS_ADD;
    return true;
  } else {
    return false;
  }
};

Game.prototype.extraTime = function() {
  this.secondsLeft += this.TIME_LIMIT;
};