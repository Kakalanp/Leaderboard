import './style.css';
// importing styles

import ADD from './modules/addScore.js';
import DISPLAY from './modules/displayGame.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');
const name = document.getElementById('input-name');
const score = document.getElementById('input-score');

submit.addEventListener('click', () => {
  ADD(name.value, score.value);
  DISPLAY();
});

refresh.addEventListener('click', () => {
  DISPLAY();
});

window.addEventListener('DOMContentLoaded', () => {
  DISPLAY();
});