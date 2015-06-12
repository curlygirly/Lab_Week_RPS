var RockPaperScissors = angular.module('RPS', ['ngResource']);

var play = new Game();

RockPaperScissors.controller('RPSController', [ function() {

  this.playerChoosesRock = function () {
    play.chooseRock();
    console.log(play.playerChoice);
    this.tellUs();
  }

  this.playerChoosesPaper = function(){
    play.choosePaper();
    console.log(play.playerChoice);
    this.tellUs();
  };

  this.playerChoosesScissors = function(){
    play.chooseScissors();
    console.log(play.playerChoice);
    this.tellUs();
  };

  this.tellUs = function() {
    document.getElementById('whatsGoingOn').innerHTML = play.playerChoice;
  };

  this.decision = function () {
  document.getElementById('whatsGoingOn').innerHTML = play.message;
  };


  this.winnerIsDecided = function(){
    play.randomNumber();
    play.computerRandomChoice();
    console.log(play.computerChoice);
    play.versus();
    console.log(play.message);
    this.decision();
  };

}]);



