var Game = function(player1, player2) {

  this.PAIRS = {
    'rock': {scissors: 'crushes', lizard: 'squashes'},
    'paper': {rock: 'covers', spock: 'disproves'},
    'scissors': {paper: 'cuts', lizard: 'decapitates'},
    'lizard': {spock: 'poisons', paper: 'eats'},
    'spock': {rock: 'vaporizes', scissors: 'bends'}
  };

  this.player1 = player1
  this.player2 = player2

};

Game.prototype.declareWinner = function(pick1, pick2) {
  var message;

  if (this._victoryVerb(pick1, pick2)) {
    message = [this.player1.name, this._victoryVerb(pick1, pick2), this.player2.name].join(' ');
    return message;
  }

  else if (this._victoryVerb(pick2, pick1)) {
    message = [this.player2.name, this._victoryVerb(pick2, pick1), this.player1.name].join(' ');
    return message;
  }

  else if (this._samePick(pick1, pick2)) {
    message = 'Draw!'
    return message
  }

};

Game.prototype._victoryVerb = function(pick, opponentPick) {
  return this.PAIRS[pick][opponentPick];
};

Game.prototype._samePick = function(pick1, pick2) {
  return pick1 === pick2;
};

// Game.prototype._victoryMessage = function() {
//   var message;
//
//   if (this.declareWinner() === player1) {
//     message = [player1.name, this._victoryVerb(player1.pick, player2.pick), player2.name].join(' ');
//   }
//
//   else if (this.declareWinner() === player2) {
//     message = [player1.name, this._victoryVerb(player2.pick, player1.pick), player1.name].join(' ');
//   }
//
//   else {
//     message = 'Draw';
//   }
//
//   return message;
// };
