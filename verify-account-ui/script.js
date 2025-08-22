const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, i) =>
  code.addEventListener('keydown', (e) => {
    if (e.key >= 0 && e.key <= 9) {
      codes[i].value = '';
      if (e.target.nextElementSibling)
        setTimeout(() => codes[i + 1].focus(), 10);
    } else if (e.key === 'Backspace') {
      setTimeout(() => codes[i - 1].focus(), 10);
    }
    console.log(codes);
  })
);
