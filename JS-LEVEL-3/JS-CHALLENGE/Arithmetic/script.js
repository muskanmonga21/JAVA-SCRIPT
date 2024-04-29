"use strict";

// Buttons
const addition = document.querySelector(".plus");
const subtraction = document.querySelector(".minus");
const multiplication = document.querySelector(".multiply");
const division = document.querySelector(".divide");

// Values
const number1Input = document.querySelector(".number1");
const number2Input = document.querySelector(".number2");
const resultInput = document.querySelector(".result");

// add event listner to buttons
addition.addEventListener("click", function () {
  const result =
    parseFloat(number1Input.value) + parseFloat(number2Input.value);
  resultInput.value = result;
});

subtraction.addEventListener("click", function () {
  const result =
    parseFloat(number1Input.value) - parseFloat(number2Input.value);
  resultInput.value = result;
});
multiplication.addEventListener("click", function () {
  const result =
    parseFloat(number1Input.value) * parseFloat(number2Input.value);
  resultInput.value = result;
});
division.addEventListener("click", function () {
  const result =
    parseFloat(number1Input.value) / parseFloat(number2Input.value);
  resultInput.value = result;
});

document.addEventListener("keydown", function (k) {
  if (k.key === "+") {
    addition.click(); // Press '+' to perform addition function
  } else if (k.key === "-") {
    subtraction.click(); // Press '-' to perform subtraction function
  } else if (k.key === "*") {
    multiplication.click(); // Press '*' to perform multiplication function
  } else if (k.key === "/") {
    division.click(); // Press '/' to perform division function
  }
});
