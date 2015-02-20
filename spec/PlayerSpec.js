describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player();
    player.setName('Matt');
  });

  describe('by default', function() {

    it('should have a name', function() {
      expect(player.name).toEqual('Matt');
    });
  });

  describe('picks an option', function() {

    it('should return the option he picked', function() {
      expect(player.picks('rock')).toEqual('rock');
    });
  });
});

describe('Computer', function() {

  var computer;

  beforeEach(function() {
    computer = new Computer();
  });

  describe('by default', function() {

    it('should be named CPU', function() {
      expect(computer.name).toEqual('CPU');
    });
  });

  describe('picks a random option', function() {

    it('should pick rock when generates a number smaller than 0.20', function() {
      spyOn(Math, 'random').and.returnValue('0.15');
      expect(computer.picks()).toEqual('rock');
    });

    it('should pick paper when generates a number between 0.20 and 0.40', function() {
      spyOn(Math, 'random').and.returnValue('0.30');
      expect(computer.picks()).toEqual('paper');
    });

    it('should pick scissors when generates a number between 0.40 and 0.60', function() {
      spyOn(Math, 'random').and.returnValue(0.50);
      expect(computer.picks()).toEqual('scissors');
    });

    it('should pick lizard when generates a number between 0.60 and 0.80', function() {
      spyOn(Math, 'random').and.returnValue(0.70);
      expect(computer.picks()).toEqual('lizard');
    });

    it('should pick spock when generates a number bigger than 0.80', function() {
      spyOn(Math, 'random').and.returnValue(0.90);
      expect(computer.picks()).toEqual('spock');
    });

  });

});
