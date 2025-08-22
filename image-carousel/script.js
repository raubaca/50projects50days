const images = document.getElementById('images');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = images.querySelectorAll('img');

let idx = 0;
const speed = 3000;

const changeImage = () => {
  if (idx < 0) idx = img.length - 1;
  else if (idx > img.length - 1) idx = 0;
  images.style.transform = `translateX(-${idx * 500}px)`;
};

const run = () => {
  idx++;
  changeImage();
};

let interval = setInterval(run, speed);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, speed);
};

leftBtn.addEventListener('click', () => {
  idx--;
  changeImage();
});

rightBtn.addEventListener('click', () => {
  idx++;
  changeImage();
  resetInterval();
});
