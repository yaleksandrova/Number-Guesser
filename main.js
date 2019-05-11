// querySelector
var smallNum = document.querySelector('.small-num');
var largeNum  =document.querySelector('.large-num');
var update = document.querySelector('.update');
var random = null;
var rangeSmall = document.querySelector('.range-small');
var rangeLarge = document.querySelector('.range-large');
 
// eventListeners

  update.addEventListener('click', updateRange)


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

//Update name of the player//

  var player1Name = document.querySelector(".player1-name");
  var player2Name = document.querySelector(".player2-name");
  var updatePlayer1= document.querySelector(".update-player1");
  var updatePlayer2 = document.querySelector(".update-player2");

  var player1GuessInput = document.querySelector(".player1-guess-input");
  var player2GuessInput = document.querySelector(".player2-guess-input");

  var player1GuessOutput = document.querySelector(".player1-guess-output");
  var player2GuessOutput = document.querySelector(".player2-guess-output");

  var submitGuess = document.querySelector(".submit-guess");
  var resetGame = document.querySelector(".reset-game");
  var clearGame = document.querySelector(".clear-gamne");


  //Event Listener//

  submitGuess.addEventListener('click', updateNames);



  // Functions://

  //.textContent=name;//

  function updateNames(playerName) {

// In html update button//

//  <button onclick="updateName" (document.getElementByClass("name").value">name</button>  //
