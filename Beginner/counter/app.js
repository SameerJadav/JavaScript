let counter = 0;

function countInc() {
  counter++;
  document.querySelector("h1").innerHTML = counter;
}

function countDec() {
  counter--;
  document.querySelector("h1").innerHTML = counter;
}

function reset() {
  counter = 0;
  document.querySelector("h1").innerHTML = counter;
}
