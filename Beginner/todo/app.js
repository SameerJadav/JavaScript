// submit is disable by default
document.querySelector("#submit").disabled = true;

// enable button only if there's text in input
document.querySelector("#task").onkeyup = () => {
  if (document.querySelector("#task").value.length > 0) {
    document.querySelector("#submit").disabled = false;
  } else {
    document.querySelector("#submit").disabled = true;
  }
};

document.querySelector("form").onsubmit = () => {
  // take the value of task
  const task = document.querySelector("#task").value;

  // create li & assign the value of task
  const li = document.createElement("li");
  li.innerHTML = task;

  // add new item to task
  document.querySelector("#tasks").append(li);

  document.querySelector("#task").value = "";
  document.querySelector("#submit").disabled = true;

  return false;
};
