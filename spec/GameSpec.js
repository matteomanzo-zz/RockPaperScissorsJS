describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('by default', function() {

    it('should have an hash of options', function() {
      expect(game.PAIRS).not.toEqual(0);
    });
  });
});
