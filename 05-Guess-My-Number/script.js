'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
//let score = Number(document.querySelector('.score').textContent);
let score = 20;
let hightScore = 0;

const displayMessage = function (msg) {
  document.querySelector('.message').textContent = msg;
};

document.querySelector('.check').addEventListener('click', function () {
  console.log(secretNumber);
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage('⛔ Enter Number!');
  } else {
    if (score > 1) {
      if (guess == secretNumber) {
        document.querySelector('body').style.backgroundColor = '#60b347';

        displayMessage('🎉 You have gussed the number');
        document.querySelector('.number').textContent = secretNumber;
        if (score > hightScore) {
          hightScore = score;
          document.querySelector('.highscore').textContent = score;
        }
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.check').disabled = true;
      } else {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess < secretNumber ? '👇 Too Low!' : '👆 Too High!');
      }
    } else {
      document.querySelector('.score').textContent = 0;
      displayMessage('😭 You Lost the Game');
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.check').disabled = true;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.check').disabled = false;
  score = 20;
});
