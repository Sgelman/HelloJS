'use strict';

const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScore = 0;

const resetBoard = function () {
  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;
  currentScore = 0;
  diceEl.classList.add('hidden');
};

resetBoard();

// Roll Dice
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled ${dice} 🎲`);
  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;
  // 3. if rolled 1:
  if (dice != 1) {
    currentScore += dice;
  } else {
    console.log(`You score : ${currentScore}`);
    console.log('⏭Switch to snd player');
  }
});
