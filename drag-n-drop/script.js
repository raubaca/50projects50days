const fill = document.querySelector(".fill");
const boxes = document.querySelectorAll(".box");

const dragStart = (e) => {
  e.target.classList.add("hold");
  setTimeout(() => (e.target.classList = "invisible"), 0);
};

const dragEnd = (e) => (e.target.classList = "fill");

const dragOver = (e) => e.preventDefault();

const dragEnter = (e) => {
  e.preventDefault();
  e.target.classList.add("hovered");
};

const dragLeave = (e) => e.target.classList.remove("hovered");

const dragDrop = (e) => {
  e.target.append(fill);
  e.target.classList.remove("hovered");
};

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

boxes.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});
