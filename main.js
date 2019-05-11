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



