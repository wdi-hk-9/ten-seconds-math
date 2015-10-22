/*global $
*/
var createGame = function () {
  "use strict";
  var
    timer,
    randInt, generateQuestion, validateAnswer,
    currentLimit, currentQuestion, currentOp,
    setCurrentLimit, setCurrentOp, setCurrentQuestion, init;

    // while timer > 0
    //  retrieve num_limit and generate rand_num
    //  generateQuestion(rand_num, op)
    //  $('#answer').on('change', validateAnswer)


  randInt = function (n) {
    return parseInt(Math.random() * (n+1), 10);
  };

  setCurrentLimit = function () {
    currentLimit = parseInt($('#limit').val(), 10);
  };

  setCurrentOp = function () {
    currentOp = $('input:checkbox:checked').attr('name');
  };

  generateQuestion = function () {
    var
      question = {},
      par1, par2;

      question.param = [];
      question.op = currentOp;
      // for addition
      question.ans = randInt(currentLimit);
      par1 = randInt(question.ans);
      par2 = question.ans - par1;
      question.param.push(par1);
      question.param.push(par2);

      return question;
  };

  setCurrentQuestion = function () {
    currentQuestion = generateQuestion();
    $('#display-q').html(currentQuestion.param[0]+currentQuestion.op+currentQuestion.param[1]);
  };

  init = function () {
    setCurrentLimit();
    setCurrentOp();
    setCurrentQuestion();
  };

  validateAnswer = function () {
    var $answer = $('#answer'),
      userAns = parseInt($answer.val(), 10);

    if (userAns === currentQuestion.ans) {
      //add 2 seconds to timer
      setCurrentQuestion();
      $answer.val('');
    }
  };

  return {
    init: init,
    validateAnswer: validateAnswer
  };

};