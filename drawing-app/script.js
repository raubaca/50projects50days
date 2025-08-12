// https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const clearBtn = document.getElementById("clear");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");

let size = +sizeEl.textContent;
let color = "black";
let isPressed = false;

let x, y;

const drawCircle = (x, y) => {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
};

const drawLine = (x1, y1, x2, y2) => {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
};

canvas.addEventListener("mousedown", (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;

    drawCircle(x2, y2);
    drawLine(x, y, x2, y2);

    [x, y] = [x2, y2];
  }
});

canvas.addEventListener("mouseleave", (e) => (isPressed = false));

increaseBtn.addEventListener("click", () => {
  if (size < 40) {
    size += 4;
    sizeEl.textContent = size;
  }
});

decreaseBtn.addEventListener("click", () => {
  if (size > 4) {
    size -= 4;
    sizeEl.textContent = size;
  }
});

clearBtn.addEventListener("click", () =>
  ctx.clearRect(0, 0, canvas.width, canvas.height)
);

colorEl.addEventListener("change", (e) => (color = e.target.value));
