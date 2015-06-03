describe ('Game', function(){

  var game = new Game();

  it('lets player choose rock', function() {
    game.chooseRock();
    expect(game.playerChoice).toEqual('rock');
  });

  it('lets player choose scissors', function(){
    game.chooseScissors();
    expect(game.playerChoice).toEqual('scissors');
  });

  it('lets player choose paper', function(){
    game.choosePaper();
    expect(game.playerChoice).toEqual('paper');
  });

  it('game can randomly make a choice of of Rock, Paper or Scissors', function (){
    game.randomNumber = 1;
    game.computerRandomChoice(game.randomNumber);
    expect(game.computerChoice).toEqual('rock');
  });

  it('knows that when player chooses rock and computer chooses scissors, player wins', function() {
    game.chooseRock();
    game.computerRandomChoice(2);
    game.versus();
    expect(game.message).toEqual('Player wins!');
  });

  it('knows that when player chooses scissors and computer chooses paper, player wins', function() {
    game.chooseScissors();
    game.computerRandomChoice(3);
    game.versus();
    expect(game.message).toEqual('Player wins!');
  });

  it('knows that when player chooses paper and computer chooses rock, player wins', function() {
    game.choosePaper();
    game.computerRandomChoice(1);
    game.versus();
    expect(game.message).toEqual('Player wins!');
  });

  it('knows that when player chooses rock and computer chooses paper, computer wins', function() {
    game.chooseRock();
    game.computerRandomChoice(3);
    game.versus();
    expect(game.message).toEqual('Computer wins!');
  });

  it('knows that when player chooses scissors and computer chooses rock, computer wins', function() {
    game.chooseScissors();
    game.computerRandomChoice(1);
    game.versus();
    expect(game.message).toEqual('Computer wins!');
  });

  it('knows that when player chooses paper and computer chooses scissors, computer wins', function() {
    game.choosePaper();
    game.computerRandomChoice(2);
    game.versus();
    expect(game.message).toEqual('Computer wins!');
  });

  it('knows that when player chooses scissors and computer chooses scissors, computer wins', function() {
    game.chooseScissors();
    game.computerRandomChoice(2);
    game.versus();
    expect(game.message).toEqual('It is a DRAW!');
  });

});