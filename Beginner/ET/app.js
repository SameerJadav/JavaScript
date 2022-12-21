document.querySelector("form").onsubmit = () => {
  // Get the value & select elements
  const name = document.querySelector("#name").value;
  const date = document.querySelector("#date").value;
  const amount = document.querySelector("#amount").value;
  let table = document.getElementById("expense-table");

  // Create new row
  let row = table.insertRow();

  // Create new cells <td>
  let displayName = row.insertCell(0);
  let displayDate = row.insertCell(1);
  let displayAmount = row.insertCell(2);

  // Add value in <td>
  displayName.innerHTML = name;
  displayDate.innerHTML = date;
  displayAmount.innerHTML = amount;

  // Remove the previous values
  document.querySelector("#name").value = "";
  document.querySelector("#date").value = "";
  document.querySelector("#amount").value = "";

  // Stop form from submitting
  return false;
};
