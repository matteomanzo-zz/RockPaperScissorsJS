var Player = function() {

};

  Player.prototype.setName = function(name) {
    this.name = name
  }

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

      if (CPUchoice < 0.20) {
        return 'rock';
      }

      else if (CPUchoice > 0.20 && CPUchoice < 0.40) {
        return 'paper';
      }

      else if (CPUchoice > 0.40 && CPUchoice < 0.60) {
        return 'scissors';
      }

      else if (CPUchoice > 0.60 && CPUchoice < 0.80) {
        return 'lizard';
      }

      else if (CPUchoice > 0.80) {
        return 'spock';
      }
      
    };
      this.pick = randomPick();
      return this.pick
};
