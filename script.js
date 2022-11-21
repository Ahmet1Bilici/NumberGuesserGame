"use strict";

// Generates random number in range of 1-20
let randNum = Math.trunc(Math.random() * 20) + 1;
// Sets inital score to 20
let score = 20;
let highscore = Number(document.querySelector(".highscore").textContent);

// When called changes current game status message with given text
const displayText = function (text) {
  document.querySelector(".message").textContent = text;
};

// When called reveals random number
const showRandNumber = function () {
  document.querySelector(".number").textContent = randNum;
};

// On check button click evaluates input number
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    // empty input
    displayText("🚫 No Number!");
  } else if (guess < 1 || guess > 20) {
    // invalid input
    displayText("🚫 Invalid Number!");
  } else if (score < 1) {
    // no more score to play
    displayText("🏳️ Game Over! You Lost!");
    showRandNumber();
    return;
  } else if (guess === randNum) {
    // match
    displayText("🎉 YOU FOUND IT 🎉");
    showRandNumber();
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== randNum) {
    // not match
    displayText(guess > randNum ? "📈 Too high!" : "📉 Too Low!");
    score--;
    document.querySelector(".score").textContent = score;
  }
  console.log(document.querySelector(".score").textContent);
  console.log(score);
});

// On again button click resets the game
document.querySelector(".again").addEventListener("click", function () {
  randNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  displayText("Start guessing...");
  highscore = Number(document.querySelector(".highscore").textContent);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
