const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
  counter.textContent = '0';
  const target = +counter.dataset.target;
  const increment = target / 200;

  const updateCounter = () => {
    const c = +counter.textContent;

    if (c < target) {
      counter.textContent = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.textContent = target;
    }
  };

  updateCounter();
});
