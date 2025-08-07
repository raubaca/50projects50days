const smallCups = document.querySelectorAll('.cup--small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

const totalCups = smallCups.length;

smallCups.forEach((cup, i) => cup.addEventListener('click', () => highlightCups(i)));

const highlightCups = (i) => {
  if (
    smallCups[i].classList.contains('full') &&
    !smallCups[i].nextElementSibling?.classList.contains('full')
  ) {
    i--;
  }
  smallCups.forEach((cup, j) => {
    if (j <= i) {
      cup.classList.add('full');
    } else {
      cup.classList.remove('full');
    }
  });

  updateBigCup();
};

const updateBigCup = () => {
  const fullCups = document.querySelectorAll('.cup--small.full').length;
  
  if (fullCups === 0) {
    percentage.style.visibility = 'hidden';
    percentage.style.height = 0;
  } else {
    const p = fullCups / totalCups;

    percentage.style.visibility = 'visible';
    percentage.style.height = `${p * 330}px`;
    percentage.textContent = `${p * 100}%`;
  }

  if (fullCups === totalCups) {
    remained.style.visibility = 'hidden';
    remained.style.height = 0;
  } else {
    remained.style.visibility = 'visible';
    liters.textContent = `${2 - (250 * fullCups) / 1000}L`;
  }
};

updateBigCup();
