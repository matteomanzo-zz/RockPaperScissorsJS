describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game('matt', 'opponent');
  });

  describe('by default', function() {

    it('should have an hash of options', function() {
      expect(game.PAIRS).not.toEqual(0);
    });

    it('should have two players', function() {
      expect(game.player1).not.toBe(null);
      expect(game.player2).not.toBe(null);
    });
  });

});
