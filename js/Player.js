var Player = function(name) {
  this.name = name
};

  Player.prototype.picks = function(pick) {
    this.pick = pick
    return this.pick
  };


var Computer = function() {
  this.name = 'CPU';
};

  Computer.prototype.picks = function() {

    var CPUchoice = Math.random()

    var randomPick = function() {

      if (CPUchoice < 0.33) {
        return 'rock';
      }

      else if (CPUchoice > 0.33 && CPUchoice < 0.66) {
        return 'paper';
      }

      else {
        return 'scissors';
      }
    };
      this.pick = randomPick();
      return this.pick
};
