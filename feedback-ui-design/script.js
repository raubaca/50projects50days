const ratings = document.querySelectorAll('.rating');

const ratingsContainer = document.getElementById('ratings-container');
const sendBtn = document.getElementById('send');
const panel = document.getElementById('panel');

let selectedRating = 'Satisfied';

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActive();
    e.target.parentNode.classList.add('active');
    if (e.target.nextElementSibling) {
      selectedRating = e.target.nextElementSibling.innerHTML;
    } else {
      selectedRating = e.target.innerHTML;
    }
  }
});

sendBtn.addEventListener('click', (e) => {
  e.preventDefault();
  panel.innerHTML = `
    <i class="fas fa-heart"></i>
    <strong>Thank you!</strong>
    <br>
    <strong>Feedback: ${selectedRating}</strong>
    <p>We'll use your feedback to improve our customer support</p>
  `;
});

const removeActive = () => {
  for (const rating of ratings) {
    rating.classList.remove('active');
  }
};
