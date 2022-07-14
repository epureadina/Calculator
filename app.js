let num1 = document.getElementById("num1-el");
let num2 = document.getElementById("num2-el");

let sumEl = document.getElementById("sum-el");

function addOp() {
  sumEl.textContent = parseInt(num1.value) + parseInt(num2.value);
}

function substractOp() {
  sumEl.innerText = parseInt(num1.value) - parseInt(num2.value);
}

function divideOp() {
  sumEl.textContent = parseInt(num1.value) / parseInt(num2.value);
}

function multiplyOp() {
  sumEl.innerText = parseInt(num1.value) * parseInt(num2.value);
}
