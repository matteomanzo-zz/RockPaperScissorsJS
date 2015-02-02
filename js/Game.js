var Game = function(player1, player2) {

  this.PAIRS = {
    'rock': {scissors: 'crushes', lizard: 'squashes'},
    'paper': {rock: 'covers', spock: 'disproves'},
    'scissors': {paper: 'cuts', lizard: 'decapitates'},
    'spock': {rock: 'vapourises', scissors: 'breaks'},
    'lizard': {spock: 'poisons', paper: 'eats'}
  };

  this.player1 = player1
  this.player2 = player2

};

Game.prototype.declareWinner = function(pick1, pick2) {
  if (this.PAIRS[pick2]['beats'] === pick1) {
    return this.player2;
  }

  else if (this.PAIRS[pick1]['beats'] === pick2) {
    return this.player1;
  }

  else if (pick1 === pick2) {
    return 'tied'
  }
};

Game.prototype._victoryVerb = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
};
