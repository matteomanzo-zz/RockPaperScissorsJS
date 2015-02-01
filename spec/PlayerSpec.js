describe('Player', function() {

  var player;

  beforeEach(function() {
    player = new Player('Matt');
  });

  describe('by default', function() {

    it('should have a name', function() {
      expect(player.name).toEqual('Matt');
    });

    describe('picks an option', function() {

      it('', function() {
        expect(player.picks('rock')).toEqual('rock');
      });
    });
  });
});
