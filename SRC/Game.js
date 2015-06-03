function Game() {

  Game.prototype.playerChoose = function(choice) {
    this.playerChoice = choice;
  };

  Game.prototype.chooseRock = function() {
    this.playerChoose('rock');
  };

  Game.prototype.chooseScissors = function() {
    this.playerChoose('scissors');
  };

  Game.prototype.choosePaper = function() {
    this.playerChoose('paper');
  };

  Game.prototype.computerChoose = function(choice) {
    this.computerChoice = choice;
     };

  Game.prototype.computerRandomChoice = function() {
    if (this.randomNumber <= 0.33) {
      this.computerChoose('rock');
    } else if (this.randomNumber <= 0.66) {
      this.computerChoose('scissors');
    } else if (this.randomNumber <= 1) {
      this.computerChoose('paper');
    };
  };

  Game.prototype.randomNumber = function() {
    this.randomNumber = Math.random();
  };

  Game.prototype.versus = function() {
    if (((this.playerChoice === 'rock' && this.computerChoice === 'scissors'))
     ||((this.playerChoice === 'scissors' && this.computerChoice === 'paper')) || ((this.playerChoice === 'paper' && this.computerChoice === 'rock'))) {
        this.message = 'Player wins!'
    } else if (this.playerChoice === this.computerChoice) {
      this.message = 'It is a DRAW!'
    } else {
      this.message = 'Computer wins!'
    }
  };

};