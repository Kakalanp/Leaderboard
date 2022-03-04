import './style.css';
// importing styles

import ADD from './modules/addScore.js';
import DISPLAY from './modules/displayGame.js';

const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');
const name = document.getElementById('input-name');
const score = document.getElementById('input-score');

async function addScore() {
  await ADD(name.value, score.value);
  DISPLAY();
  name.value = '';
  score.value = '';
  name.focus();
}

name.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') score.focus();
});

score.addEventListener('keypress', async (e) => {
  if (e.key === 'Enter') addScore();
});

submit.addEventListener('click', async () => {
  addScore();
});

refresh.addEventListener('click', () => {
  DISPLAY();
});

window.addEventListener('DOMContentLoaded', () => {
  DISPLAY();
});