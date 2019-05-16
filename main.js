var smallNum = document.querySelector('.small-num');
var largeNum  =document.querySelector('.large-num');
var update = document.querySelector('.update');
var rangeSmall = document.querySelector('.range-small');
var rangeLarge = document.querySelector('.range-large');
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
var clearGame = document.querySelector('.clear-game');
var hintPlayer1 = document.querySelector('.hint-player1');
var hintPlayer2 = document.querySelector('.hint-player2');
var random = null;

update.addEventListener('click', updateRange);
submitGuess.addEventListener('click', submitGuessButton);
submitGuess.addEventListener('click', calculateHint1);
clearGame.addEventListener('click', clearButton);
resetGame.addEventListener('click', resetButton);
player1Name.addEventListener('keyup', enableButtons);
player2Name.addEventListener('keyup', enableButtons);
player1GuessInput.addEventListener('keyup', enableButtons);
player2GuessInput.addEventListener('keyup', enableButtons);

function updateRange() {
  event.preventDefault();
  var min = parseInt(smallNum.value) || 1;
  var max = parseInt(largeNum.value) || 100;
  rangeSmall.innerText = min;
  rangeLarge.innerText = max;
  random = randomNum(min, max);
}

function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) +  min);
}

function submitGuessButton() {
  updatePlayer1.innerText = player1Name.value;
  updatePlayer2.innerText = player2Name.value;
  player1GuessOutput.innerText = player1GuessInput.value;
  player2GuessOutput.innerText = player2GuessInput.value;
};

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
  } else {
    hintPlayer2.innerText = "BOOM!";
  }
};

function clearButton() {
  event.preventDefault(); 
  player1Name.value = '';
  player2Name.value = '';
  player1GuessInput.value = '';
  player2GuessInput.value = '';
};

function resetButton() {
  event.preventDefault();
  clearButton();
  updateRange();
  hintPlayer1.innerText = '';
  hintPlayer2.innerText = '';
  player1GuessOutput.innerText = '??';
  player2GuessOutput.innerText = '??';
  updatePlayer1.innerText = 'Challenger 1 Name';
  updatePlayer2.innerText = 'Challenger 2 Name';
};

function enableButtons(){
  var inputs = [
  player1Name.value,
  player2Name.value,
  player1GuessInput.value,
  player2GuessInput.value];

  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i] === ''){
      clearGame.disabled = true;
      resetGame.disabled = true;
      return;
      } else {
      clearGame.disabled = false;
      resetGame.disabled = false;
      return;
    }
  } 
};
































