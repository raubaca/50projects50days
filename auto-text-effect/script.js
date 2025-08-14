const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming";

let idx = 0;
let speed = 300 / speedEl.value;

const writeText = () => {
  textEl.textContent = text.slice(0, idx);
  idx++;

  if (idx > text.length) {
    idx = 0;
  }

  setTimeout(writeText, speed);
};

speedEl.addEventListener("input", (e) => (speed = 300 / e.target.value));

writeText();
