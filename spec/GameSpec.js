describe('Game', function() {

  var game;
  var player;
  var computer;

  beforeEach(function() {
    player = new Player('Matt');
    computer = new Computer();
    game = new Game(player, computer);
  });

  describe('by default', function() {

    it('should have an hash of options', function() {
      expect(game.PAIRS).not.toEqual(0);
    });

    it('should have two players', function() {
      expect(game.player1.name).toEqual('Matt');
      expect(game.player2.name).toEqual('CPU');
    });
  });

  describe('when the players picked the options', function() {

    describe('should declare winner the player', function() {

      it('when he picks rock and the computer picks scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.80');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(player);
      });

      it('when he picks scissors and the computer picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.50');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(player);
      });

      it('when he picks paper and the computer picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.20');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(player);
      });
    });

    describe('should declare winner the computer', function() {

      it('when it picks rock and the player picks scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.20');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(computer);
      });

      it('when it picks scissors and the player picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(computer);
      });

      it('when it picks paper and the player picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.60');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(computer);
      });

    });

    describe('should declare a draw', function() {

      it('when both pick scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('tied');
      });

      it('when both pick paper', function() {
        spyOn(Math, 'random').and.returnValue('0.40');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('tied');
      });

      it('when both pick rock', function() {
        spyOn(Math, 'random').and.returnValue('0.20');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('tied');
      });

    });

  });

});
