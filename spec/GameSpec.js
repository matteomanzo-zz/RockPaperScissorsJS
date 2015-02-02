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
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt crushes CPU');
      });

      it('when he picks rock and the computer picks lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt squashes CPU');
      });

      it('when he picks scissors and the computer picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt cuts CPU');
      });

      it('when he picks scissors and the computer picks lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt decapitates CPU');
      });

      it('when he picks paper and the computer picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt covers CPU');
      });

      it('when he picks paper and the computer picks spock', function() {
        spyOn(Math, 'random').and.returnValue('0.90');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt disproves CPU');
      });

      it('when he picks lizard and the computer picks spock', function() {
        spyOn(Math, 'random').and.returnValue('0.90');
        player.picks('lizard')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt poisons CPU');
      });

      it('when he picks lizard and the computer picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('lizard')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt eats CPU');
      });

      it('when he picks spock and the computer picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('spock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt vaporizes CPU');
      });

      it('when he picks spock and the computer picks scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        player.picks('spock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Matt bends CPU');
      });
    });

    describe('should declare winner the computer', function() {

      it('when it picks rock and the player picks scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU crushes Matt');
      });

      it('when it picks rock and the player picks lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('lizard')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU squashes Matt');
      });

      it('when it picks scissors and the player picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU cuts Matt');
      });

      it('when it picks scissors and the player picks lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        player.picks('lizard')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU decapitates Matt');
      });

      it('when it picks paper and the player picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU covers Matt');
      });

      it('when it picks paper and the player picks spock', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('spock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU disproves Matt');
      });

      it('when it picks lizard and the player picks spock', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        player.picks('spock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU poisons Matt');
      });

      it('when it picks lizard and the player picks paper', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU eats Matt');
      });

      it('when it picks spock and the player picks rock', function() {
        spyOn(Math, 'random').and.returnValue('0.90');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU vaporizes Matt');
      });

      it('when it picks spock and the player picks scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.90');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('CPU bends Matt');
      });

    });

    describe('should declare a draw', function() {

      it('when both pick scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        player.picks('scissors')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Draw!');
      });

      it('when both pick paper', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        player.picks('paper')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Draw!');
      });

      it('when both pick rock', function() {
        spyOn(Math, 'random').and.returnValue('0.10');
        player.picks('rock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Draw!');
      });

      it('when both pick lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        player.picks('lizard')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Draw!');
      });

      it('when both pick spock', function() {
        spyOn(Math, 'random').and.returnValue('0.90');
        player.picks('spock')
        computer.picks()
        expect(game.declareWinner(player.pick, computer.pick)).toEqual('Draw!');
      });

    });

    describe('has verbs to declare the winner', function() {

      it('should say crushes when rock beats scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        expect(game._victoryVerb(player.picks('rock'), computer.picks())).toEqual('crushes');
      });

      it('should say squashes when rock beats lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        expect(game._victoryVerb(player.picks('rock'), computer.picks())).toEqual('squashes');
      });

      it('should say covers when paper beats rock', function() {
        spyOn(Math, 'random').and.returnValue('0.15');
        expect(game._victoryVerb(player.picks('paper'), computer.picks())).toEqual('covers');
      });

      it('should say disproves when paper beats spock', function() {
        spyOn(Math, 'random').and.returnValue('0.90');
        expect(game._victoryVerb(player.picks('paper'), computer.picks())).toEqual('disproves');
      });

      it('should say cuts when scissors beats paper', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        expect(game._victoryVerb(player.picks('scissors'), computer.picks())).toEqual('cuts');
      });

      it('should say decapitates when scissors beats lizard', function() {
        spyOn(Math, 'random').and.returnValue('0.70');
        expect(game._victoryVerb(player.picks('scissors'), computer.picks())).toEqual('decapitates');
      });

      it('should say poisons when lizard beats spock', function() {
        spyOn(Math, 'random').and.returnValue('0.90');
        expect(game._victoryVerb(player.picks('lizard'), computer.picks())).toEqual('poisons');
      });

      it('should say eats when lizard beats paper', function() {
        spyOn(Math, 'random').and.returnValue('0.30');
        expect(game._victoryVerb(player.picks('lizard'), computer.picks())).toEqual('eats');
      });

      it('should say vaporizes when spock beats rock', function() {
        spyOn(Math, 'random').and.returnValue('0.15');
        expect(game._victoryVerb(player.picks('spock'), computer.picks())).toEqual('vaporizes');
      });

      it('should say bends when spock beats scissors', function() {
        spyOn(Math, 'random').and.returnValue('0.45');
        expect(game._victoryVerb(player.picks('spock'), computer.picks())).toEqual('bends');
      });

      // it('should print the message', function() {
      //   spyOn(Math, 'random').and.returnValue('0.45');
      //   game._victoryVerb(player.picks('spock'), computer.picks());
      //   expect(game._victoryMessage()).toEqual('Matt bends CPU');
      // });

    });

  });

});
