const screen = document.querySelector('.display-screen');

export default async function print(arr) {
  // we always need to clear the screen before appending new elements.
  screen.innerHTML = '';
  const array = Array.from(await arr);
  array.forEach((e) => {
    const scoreDisplay = document.createElement('div');
    scoreDisplay.classList.add('score');
    scoreDisplay.innerHTML = `<h4>${e.user}</h4> <p>${e.score}</p>`;
    screen.appendChild(scoreDisplay);
  });
}