

var player;
var computer;
var playerChoice;
var computerChoice;
var choices = ['rock', 'paper', 'scissors'];
var output = document.querySelector('.output');

document.querySelector('.btn-rock').addEventListener('click', function(data){
  //reset
  document.querySelector('.rock').style.display = "none";
  document.querySelector('.paper').style.display = "none";
  document.querySelector('.scissors').style.display = "none";

  playerChoice = data['srcElement'].value;
  document.querySelector('.rock').style.display = "block";
  computerChoice = computerTurn();
  result(playerChoice, computerChoice);
});

document.querySelector('.btn-paper').addEventListener('click', function(data){
  //reset
  document.querySelector('.rock').style.display = "none";
  document.querySelector('.paper').style.display = "none";
  document.querySelector('.scissors').style.display = "none";

  playerChoice = data['srcElement'].value;
  document.querySelector('.paper').style.display = "block";
  computerChoice = computerTurn();
  result(playerChoice, computerChoice);
});

document.querySelector('.btn-scissors').addEventListener('click', function(data){
  //reset
  document.querySelector('.rock').style.display = "none";
  document.querySelector('.paper').style.display = "none";
  document.querySelector('.scissors').style.display = "none";

  playerChoice = data['srcElement'].value;
  document.querySelector('.scissors').style.display = "block";
  computerChoice = computerTurn();
  result(playerChoice, computerChoice);
});


function computerTurn(){
  //reset
  document.querySelector('.rockComputer').style.display = "none";
  document.querySelector('.paperComputer').style.display = "none";
  document.querySelector('.scissorsComputer').style.display = "none";

  var randomNum = Math.floor((Math.random() * 3));

  if(randomNum === 0){
    document.querySelector('.rockComputer').style.display = "block";
  }

  if(randomNum === 1){
    document.querySelector('.paperComputer').style.display = "block";
  }

  if(randomNum === 2){
    document.querySelector('.scissorsComputer').style.display = "block";
  }


  return choices[randomNum];
  // 0 = rock
  // 1 = paper
  // 2 = scissors
}


function result(playerchoice, computerchoice){
  var whoWinMessage;

  // console.log(`PlayerChoice: ${playerchoice}, computerchoice: ${computerchoice}`);

  if(playerchoice === computerchoice){
    whoWinMessage = 'Draw';
    // console.log("draw");
  }

  // win condition
  if((playerchoice === 'paper' && computerchoice === 'rock')){
    whoWinMessage = 'player win';
    // console.log("player win");
  }

  if((playerchoice === 'scissors' && computerchoice === 'paper')){
    whoWinMessage = 'player win';
    // console.log("player win");
  }

  if((playerchoice === 'rock' && computerchoice === 'scissors')){
    whoWinMessage = 'player win';
    // console.log("player win");
  }

  if((computerchoice === 'paper' && playerchoice === 'rock')){
    whoWinMessage = 'computer win';
    // console.log("computer win");
  }

  if((computerchoice === 'scissors' && playerchoice === 'paper')){
    whoWinMessage = 'computer win';
    // console.log("computer win");
  }

  if((computerchoice === 'rock' && playerchoice === 'scissors')){
    whoWinMessage = 'computer win';
    // console.log("computer win");
  }

  output.innerHTML = `<h1>Player Choice: ${playerchoice}, Computer Choice: ${computerchoice}</h1></br>

  <h1>${whoWinMessage}</h1>`;

}
