'use strict';

let P1 = document.querySelector('.player--0');
let P2 = document.querySelector('.player--1');
const scoreEl0 = document.getElementById('score--0');
const scoreEl1 = document.getElementById('score--1');
const currentEl0 = document.getElementById('current--0');
const currentEl1 = document.getElementById('current--1');
let diceEl = document.querySelector('.dice');
const btnNewGame = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let scores, currentScore, activePlayer;

const resetBoard = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;

  btnRoll.disabled = false;
  btnHold.disabled = false;

  scoreEl0.textContent = 0;
  scoreEl1.textContent = 0;

  document.getElementById(`current--${activePlayer}`).textContent = 0;
  console.log(`⏭Switch to snd player ${activePlayer}`);
  diceEl.classList.add('hidden');
  P1.classList.remove('player--winner');
  P2.classList.remove('player--winner');
  P1.classList.add('player--active');
  P2.classList.remove('player--active');
};

resetBoard();

const switchPlayer = function () {
  P1.classList.toggle('player--active');
  P2.classList.toggle('player--active');
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  console.log(`Switch to player-${activePlayer + 1}`);
  currentScore = 0;
};

// Roll Dice
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled ${dice} 🎲`);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. if rolled 1:
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    switchPlayer();
  }
});

// New Game
btnNewGame.addEventListener('click', resetBoard);

//Hold
btnHold.addEventListener('click', function () {
  console.log(`You score on this run: ${currentScore}`);
  scores[activePlayer] += currentScore;

  if (scores[activePlayer] >= 100) {
    diceEl.classList.add('hidden');
    document
      .querySelector(`.player--${activePlayer}`)
      .classList.add('player--winner');

    document
      .querySelector(`.player--${activePlayer}`)
      .classList.remove('player--active');

    document.getElementById(
      `score--${activePlayer}`
    ).textContent = `🎉${scores[activePlayer]}🎉`;
    btnRoll.disabled = true;
    btnHold.disabled = true;
  } else {
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    switchPlayer();
  }
});
