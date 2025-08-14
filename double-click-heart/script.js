const loveMe = document.getElementById("loveMe");
const times = document.getElementById("times");

let clickTime = 0;
let count = 0;

loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

/**
 * dbclick event
 * loveMe.addEventListener('dblclick', (e) => createHeart(e))
 */

const createHeart = (e) => {
  const heart = document.createElement("i");

  heart.classList.add("fas", "fa-heart");
  heart.style.left = e.offsetX + "px";
  heart.style.top = e.offsetY + "px";

  loveMe.appendChild(heart);

  times.textContent = ++count;
  setTimeout(() => heart.remove(), 600);
};
