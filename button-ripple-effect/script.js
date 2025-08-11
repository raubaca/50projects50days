const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const x = e.clientX;
    const y = e.clientY;

    const buttonTop = e.target.offsetTop;
    const buttonLeft = e.target.offsetLeft;

    button.style.setProperty('--content', '""');
    button.style.setProperty('--left', `${x - buttonLeft}px`);
    button.style.setProperty('--top', `${y - buttonTop}px`);

    setTimeout(() => {
      button.style.removeProperty('--content');
      button.style.removeProperty('--left');
      button.style.removeProperty('--top');
    }, 500);
  });
});
