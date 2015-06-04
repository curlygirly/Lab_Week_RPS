var play = new Game();

tellUs = function() {
  document.getElementById('whatsGoingOn').innerHTML = play.playerChoice;
};

decision = function () {
  document.getElementById('whatsGoingOn').innerHTML = play.message;
};

playerChoosesRock = function(){
  play.chooseRock();
  console.log(play.playerChoice);
  tellUs();
};

playerChoosesPaper = function(){
  play.choosePaper();
  console.log(play.playerChoice);
  tellUs();
};

playerChoosesScissors = function(){
  play.chooseScissors();
  console.log(play.playerChoice);
  tellUs();
};

winnerIsDecided = function(){
  play.randomNumber();
  play.computerRandomChoice();
  console.log(play.computerChoice);
  play.versus();
  console.log(play.message);
  decision();
};


