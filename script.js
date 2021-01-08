'use strict';

//Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting conditions
diceEl.classList.add('hidden');
score1El.textContent = 0;
score0El.textContent = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.setAttribute('src', `dice-${dice}.png`);

  // 2. Display dice

  // 3. Check for rolled 1: if true, switch to next player
});

//const diceValue = Math.trunc(Math.random(6 * 10));

//console.log(Math.random(6 * 100));
