const sliderContainer = document.querySelector(".slider-container");
const slideLeft = document.querySelector(".left-slide");
const slideRight = document.querySelector(".right-slide");

const downButton = document.getElementById("down-button");
const upButton = document.getElementById("up-button");

const slidesLength = slideRight.querySelectorAll("div").length;

let activeSlideIndex = 0;

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

const changeSlide = (direction) => {
  const sliderHeight = sliderContainer.clientHeight;

  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  } else if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }

  slideLeft.style.transform = `translateY(${
    activeSlideIndex * sliderHeight
  }px)`;
  slideRight.style.transform = `translateY(-${
    activeSlideIndex * sliderHeight
  }px)`;
};

upButton.addEventListener("click", () => changeSlide("up"));
downButton.addEventListener("click", () => changeSlide("down"));
