let counter = 0;

function sec() {
  document.querySelector("h1").innerHTML = counter;
}

function countInc() {
  counter++;
  sec();
}

function countDec() {
  counter--;
  sec();
}

function reset() {
  counter = 0;
  sec();
}
