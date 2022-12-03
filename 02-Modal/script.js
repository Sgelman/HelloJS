'use strict';

document.addEventListener('keydown', function (kbEvnt) {
  if (kbEvnt.code === 'Escape' && !modal.classList.contains('hidden')) {
    hideModal();
  }
});
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnShowModal.length; i++)
  btnShowModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', hideModal);
