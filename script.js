'use strict';

let randNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = Number(document.querySelector('.highscore').textContent);

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // empty input
    document.querySelector('.message').textContent = '🚫 No Number!';
  } else if (guess < 1 || guess > 20) {
    // invalid input
    document.querySelector('.message').textContent = '🚫 Invalid Number!';
  } else if (score === 1) {
    document.querySelector('.message').textContent = 'Game Over! You Lost';
    document.querySelector('.number').textContent = randNum;
    return;
  } else if (guess === randNum) {
    // match
    document.querySelector('.message').textContent = '🎉 YOU FOUND IT 🎉';
    document.querySelector('.number').textContent = randNum;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess < randNum) {
    // lower
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess > randNum) {
    // higher
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  console.log(document.querySelector('.score').textContent);
  console.log(score);
});

document.querySelector('.again').addEventListener('click', function () {
  randNum = Math.floor(Math.random() * 20) + 1;
  score = 20;
  highscore = Number(document.querySelector('.highscore').textContent);
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
