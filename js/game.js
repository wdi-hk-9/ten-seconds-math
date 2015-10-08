var Game = function(difficulty, timeLimit) {
  this.secondsLeft = timeLimit;
  this.timer       = null;

  this.difficulty = difficulty;  // Determines how big numbers are
  this.problem    = null;        // Current problem to solve
  this.ADD_POINTS = 5;           // Points when guess is right
  this.score      = 0;
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
};

Game.prototype.addPoints = function() {
  this.score += this.ADD_POINTS;
  console.log(this.score);
};