const nums = document.querySelectorAll('.nums li');
const counter = document.querySelector('.counter');
const finalMessage = document.querySelector('.final');
const replay = document.getElementById('replay');

const runAnimation = () =>
  nums.forEach((num) =>
    num.addEventListener('animationend', (e) => {
      if (e.animationName === 'goIn' && num.nextElementSibling) {
        num.classList.remove('in');
        num.classList.add('out');
      } else if (e.animationName === 'goOut' && num.nextElementSibling) {
        num.nextElementSibling.classList.add('in');
      } else {
        counter.classList.add('hide');
        finalMessage.classList.add('show');
      }
    })
  );

const resetDOM = () => {
  counter.classList.remove('hide');
  finalMessage.classList.remove('show');

  nums.forEach((num) => (num.classList.value = ''));
  nums[0].classList.add('in');
};

replay.addEventListener('click', resetDOM);

runAnimation();
