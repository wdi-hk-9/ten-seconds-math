$(function(){

  var game = createGame();

  game.init();

  $('#answer').on('keyup', game.validateAnswer)


  });
