const container = document.getElementById('container');
const API_URL = 'https://picsum.photos/';
const rows = 3;

const getRandomNum = () => Math.floor(Math.random() * 10) + 300;

for (let i = 0; i < rows * 3; i++) {
  const img = document.createElement('img');
  const size = `${getRandomNum()}/${getRandomNum()}`;
  img.src = `${API_URL}${size}`;
  container.appendChild(img);
}
