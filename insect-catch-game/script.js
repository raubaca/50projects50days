const screens = document.querySelectorAll('.screen');
const chooseInsectBtns = document.querySelectorAll('.choose-insect-btn');
const startBtn = document.getElementById('start-btn');

const gameContainer = document.getElementById('game-container');
const timeEl = document.getElementById('time');
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');

let seconds = 0;
let score = 0;
let selectedInsect = '';

startBtn.addEventListener('click', () => screens[0].classList.add('up'));

chooseInsectBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    selectedInsect = btn.querySelector('span').innerText;
    screens[1].classList.add('up');
    setTimeout(createInsect, 1000);
    startGame();
  });
});

const createInsect = () => {
  const insect = document.createElement('div');
  insect.classList.add('insect');
  const { x, y } = getRandomLocation();

  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;

  const insectImg = document.createElement('span');
  insectImg.innerText = selectedInsect;
  insectImg.style = `transform: rotate(${Math.random() * 360}deg)`;

  insect.appendChild(insectImg);
  insect.addEventListener('click', catchInsect);

  gameContainer.appendChild(insect);
};

const startGame = () => setInterval(increaseTime, 1000);

const increaseTime = () => {
  let m = Math.floor(seconds / 60);
  let s = seconds % 60;
  m = m < 10 ? `0${m}` : m;
  s = s < 10 ? `0${s}` : s;
  timeEl.innerHTML = `Time: ${m}:${s}`;
  seconds++;
};

const increaseScore = () => {
  score++;
  if (score > 19) {
    messageEl.classList.add('visible');
  }
  scoreEl.innerHTML = `Score: ${score}`;
};

const getRandomLocation = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const x = Math.random() * (width - 200) + 100;
  const y = Math.random() * (height - 200) + 100;
  return { x, y };
};

const catchInsect = (e) => {
  increaseScore();
  e.target.classList.add('caught');
  setTimeout(() => e.target.remove(), 2000);
  addInsects();
};

const addInsects = () => {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 5000);
};
