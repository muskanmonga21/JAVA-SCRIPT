"use strict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Stop!!";

document.querySelector(".number").textContent = 14;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 18;
console.log(document.querySelector(".guess").value);
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector(".number").textContent = secretNumber;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(typeof guess);

  if (!guess) {
    document.querySelector(".messaeg").textContent = " 🛑 No number";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct number";
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  } //   When the Guess is Too High
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "⬆️ Too High!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = " 😕You lost the Game!!";
    }
  } //When the Guess is Too Low
  else if (guess < secretNumber) {
    document.querySelector(".message").textContent = "⬇️ Too Low!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
