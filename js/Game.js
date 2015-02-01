var Game = function(player1, player2) {

  PAIRS = {
    rock: {beats: 'scissors'},
    scissors: {beats: 'paper'},
    paper: {beats: 'rock'}
  };

  this.player1 = player1
  this.player2 = player2

};
