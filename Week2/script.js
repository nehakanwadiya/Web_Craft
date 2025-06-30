function calculateSplit() {
  const bill = parseFloat(document.getElementById("bill").value);
  const tip = parseFloat(document.getElementById("tip").value);
  const people = parseInt(document.getElementById("people").value);
  const currency = document.getElementById("currency").value;

  if (isNaN(bill) || isNaN(tip) || isNaN(people) || people <= 0) {
    alert("Please enter valid inputs for all fields!");
    return;
  }

  const tipAmount = (bill * tip) / 100;
  const total = bill + tipAmount;
  const perPerson = total / people;

  document.getElementById("tipAmount").textContent = currency + tipAmount.toFixed(2);
  document.getElementById("totalWithTip").textContent = currency + total.toFixed(2);
  document.getElementById("eachPays").textContent = currency + perPerson.toFixed(2);

  document.getElementById("resultBox").style.display = 'block';
}

function resetForm() {
  document.getElementById("bill").value = '';
  document.getElementById("tip").value = '';
  document.getElementById("people").value = '';
  document.getElementById("resultBox").style.display = 'none';
}
