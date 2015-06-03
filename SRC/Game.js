function Game() {

  Game.prototype.chooseRock = function() {
    this.playerChoice = 'rock';
  };

  Game.prototype.chooseScissors = function() {
    this.playerChoice = 'scissors'
  };

  Game.prototype.choosePaper = function() {
    this.playerChoice = 'paper'
  };

  Game.prototype.computerRandomChoice = function(randomNumber) {
    if (randomNumber === 1) {
      this.computerChoice = 'rock'
    } else if (randomNumber === 2) {
      this.computerChoice = 'scissors'
    } else if (randomNumber === 3) {
      this.computerChoice = 'paper'
    };
  };

  Game.prototype.randomNumber = function() {
    this.randomNumber = (Math.random()*3) + 1;
  };

  Game.prototype.versus = function() {
    if (((this.playerChoice === 'rock' && this.computerChoice === 'scissors'))
     ||((this.playerChoice === 'scissors' && this.computerChoice === 'paper')) || ((this.playerChoice === 'paper' && this.computerChoice === 'rock'))) {
        this.message = 'Player wins!'
    }
  };

};