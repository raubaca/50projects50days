const container = document.getElementById('container');
const colors = ['red', 'blue', 'yellow', 'green', 'purple', 'orange'];
const SQUARES = 400;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  square.addEventListener('mouseenter', () => setColor(square));
  square.addEventListener('mouseout', () => removeColor(square));
  container.appendChild(square);
}

const setColor = (el) => {
  const color = colors[Math.floor(Math.random() * colors.length)];
  el.style.backgroundColor = color;
  el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

const removeColor = (el) => {
  el.style.backgroundColor = '#1d1d1d';
  el.style.boxShadow = '0 0 2px #000';
};
