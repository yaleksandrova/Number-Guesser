// querySelector
var smallNum = document.querySelector('.small-num');
var largeNum  =document.querySelector('.large-num');
var update = document.querySelector('.update');
var random = null;
var rangeSmall = document.querySelector('.range-small');
var rangeLarge = document.querySelector('.range-large');
 
// eventListeners

  update.addEventListener('click', updateRange);


// functions

function updateRange() {
  event.preventDefault();
  var min = parseInt(smallNum.value) || 1;
  var max = parseInt(largeNum.value) || 100;
  rangeSmall.innerText = min;
  rangeLarge.innerText = max;
  random = randomNum(min, max);
  console.log(random);
}
//update min range
//update max range

function randomNum(min, max) {
  return Math.floor(Math.random()*(max - min)+  min);
}


var player1Name = document.querySelector('.player1-name');
var player2Name = document.querySelector('.player2-name');
var updatePlayer1= document.querySelector('.update-player1');
var updatePlayer2 = document.querySelector('.update-player2');
var player1GuessInput = document.querySelector('.player1-guess-input');
var player2GuessInput = document.querySelector('.player2-guess-input');
var player1GuessOutput = document.querySelector('.player1-guess-output');
var player2GuessOutput = document.querySelector('.player2-guess-output');
var submitGuess = document.querySelector('.submit-guess');
var resetGame = document.querySelector('.reset-game');
var clearGame = document.querySelector('.clear-gamne');


  //Event Listeners//
  
  //when submit guess is clicked update player name and guesses

//update player names//
  //take user input names and output them to display above guesses
  //can accept any alpha-numeric character 

//update player guesses
  //take user guesses and update them to display below coresponding name
  //can only accept numeric values


submitGuess.addEventListener('click', submitGuessButton);
  
function submitGuessButton() {
  updatePlayer1.innerText = player1Name.value;
  updatePlayer2.innerText = player2Name.value;
  player1GuessOutput.innerText = player1GuessInput.value;
  player2GuessOutput.innerText = player2GuessInput.value;
};

  // Display results and feedback for each players guess: Too High/Low/BOOM //

  var submitGuess = document.querySelector('.submit-guess');
  var hintPlayer1 = document.querySelector('.hint-player1');
  var hintPlayer2 = document.querySelector('.hint-player2');

///eventlisteners

submitGuess.addEventListener('click', calculateHint1);


function calculateHint1() {
  if (player1GuessInput.value < random ){
    hintPlayer1.innerText = "that's too low";
  } else if (player1GuessInput.value > random) {
    hintPlayer1.innerText = "that's too high";
  } else {
    hintPlayer1.innerText = "BOOM!";
  }
  calculateHint2();
};


function calculateHint2() {
    if (player2GuessInput.value < random){
    hintPlayer2.innerText = "that's too low";
  } else if (player2GuessInput.value > random) {
    hintPlayer2.innerText = "that's too high";
  } else  {
    hintPlayer2.innerText = "BOOM!";
  }
  
};


var resetGame = document.querySelector('.reset-game');
var clearGame = document.querySelector('.clear-game');


//Event Listeners



clearGame.addEventListener('click', clearButton);

function clearButton() {
  event.preventDefault(); 
  player1Name.value = " ";
  player2Name.value = " ";
  player1GuessInput.value = " ";
  player2GuessInput.value = " ";
};

resetGame.addEventListener('click', resetButton);

function resetButton() {
  event.preventDefault();
  clearButton();
  updateRange();
  hintPlayer1.innerText = " ";
  hintPlayer2.innerText = " ";
  player1GuessOutput.innerText = "??";
  player2GuessOutput.innerText = "??";
  updatePlayer1.innerText = "Challenger 1 Name";
  updatePlayer2.innerText = "Challenger 2 Name";
};

smallNum.addEventListener('keyup', enableButtons);
largeNum.addEventListener('keyup', enableButtons);
player1Name.addEventListener('keyup', enableButtons);
player2Name.addEventListener('keyup', enableButtons);
player1GuessInput.addEventListener('keyup', enableButtons);
player2GuessInput.addEventListener('keyup', enableButtons);

function enableButtons(){
 clearGame.disabled = false;
 resetGame.disabled = false;
};
































