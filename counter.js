let counterElement = document.getElementById("counterValue");
counterElement.style.color = "green";
function onIncrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) + 1;

  counterElement.textContent = updatedCounterValue;
}



function onDecrement() {
  let previousCounterValue = counterElement.textContent;
  let updatedCounterValue = parseInt(previousCounterValue) - 1;

  counterElement.textContent = updatedCounterValue;
}



function onReset() {
  let counterValue = 0;
  counterElement.textContent = counterValue;

}

