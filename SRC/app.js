var play = new Game();

window.onload=function(){
  tellUs();
};

playerChoosesRock = function(){
  play.chooseRock();
  console.log(play.playerChoice);
};

playerChoosesPaper = function(){
  play.choosePaper();
  console.log(play.playerChoice);
};

playerChoosesScissors = function(){
  play.chooseScissors();
  console.log(play.playerChoice);
};

winnerIsDecided = function(){
  play.randomNumber();
  play.computerRandomChoice();
  console.log(play.computerChoice);
  play.versus();
  console.log(play.message);
};

tellUs = function() {
  document.getElementById('whatsGoingOn').innerHTML = play.playerChoice;
};