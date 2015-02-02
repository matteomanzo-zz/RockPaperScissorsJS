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
  if (this._victoryVerb(pick1, pick2)) {
    return this.player1;
  }

  else if (this._samePick(pick1, pick2)) {
    return 'tied'
  }

  else  {
    return this.player2;
  }

};

Game.prototype._victoryVerb = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
};

Game.prototype._samePick = function(pick1, pick2) {
  return pick1 === pick2;
};
