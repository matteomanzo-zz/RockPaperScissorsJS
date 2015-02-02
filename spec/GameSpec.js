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
        spyOn(Math, 'random').and.returnValue('0.45');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(player);
      });

      it('when he picks scissors and the computer picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(player);
      });

      it('when he picks paper and the computer picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(player);
      });
    });

    describe('should declare winner the computer', function() {

      it('when it picks rock and the player picks scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(computer);
      });

      it('when it picks scissors and the player picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(computer);
      });

      it('when it picks paper and the player picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual(computer);
      });

    });

    describe('should declare a draw', function() {

      it('when both pick scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('tied');
      });

      it('when both pick paper', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('tied');
      });

      it('when both pick rock', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('tied');
      });

    });

    describe('has verbs to declare the winner', function() {

      it('should say crushes when the rock beats scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        expect(game._victoryVerb(player.picks('rock'), computer.picks())).toEqual('crushes');
      });

      it('should say decapitates when the scissors beats the lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        expect(game._victoryVerb(player.picks('scissors'), computer.picks())).toEqual('decapitates');
      });

    });

  });

});
