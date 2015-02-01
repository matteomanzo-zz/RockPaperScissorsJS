describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player('Matt');
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

    it('should pick rock when generates a number smaller than 0.33', function() {
      spyOn(Math, 'random').and.returnValue('0.25');
      expect(computer.picks()).toEqual('rock');
    });

    it('should pick paper when generates a number between 0.33 and 0.66', function() {
      spyOn(Math, 'random').and.returnValue('0.50');
      expect(computer.picks()).toEqual('paper');
    });

    it('should pick scissors when generates a number bigger than 0.66', function() {
      spyOn(Math, 'random').and.returnValue(0.80);
      expect(computer.picks()).toEqual('scissors');
    });

  });

});
