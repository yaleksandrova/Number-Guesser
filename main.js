// querySelector
var smallNum=document.querySelector('.small-num');
var largeNum=document.querySelector('.large-num');
var update=document.querySelector('.update');

var rangeSmall=document.querySelector('.range-small');
var rangeLarge=document.querySelector('.range-large');

// eventListeners

  update.addEventListener('click', updateRange)


// functions

function updateRange() {
  event.preventDefault();
  // console.log('user input', smallNum.value);
  // console.log('user input', largeNum.value);

  // console.log(rangeSmall.innerText);
  // console.log(rangeLarge.innerText);
  
  rangeSmall.innerText = smallNum.value || 1;
  rangeLarge.innerText = largeNum.value || 100;
}
//update min range
//update max range

function randomNum() {
  smallNum.value >= math.ceil(1);
  largeNum.value <= math.floor(100);
  console.log('min', smallNum.value);
  console.log('max', largeNum.value);

  
  return Math.floor(math.random()*(max-min)+ min);
}


