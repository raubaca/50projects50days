const range = document.getElementById('range');

const thumb_size = 24;

range.addEventListener('input', (e) => {
  const value = +e.target.value;
  const label = e.target.nextElementSibling;

  // Get CSS values
  // const range_width = getComputedStyle(e.target).getPropertyValue('width');
  // const label_width = getComputedStyle(label).getPropertyValue('width');

  // const num_width = +range_width.substring(0, range_width.length - 2);
  // const num_label_width = +label_width.substring(0, label_width.length - 2);

  const num_width = e.target.clientWidth;
  const num_label_width = label.clientWidth;

  const max = +e.target.max;
  const min = +e.target.min;

  const left =
    convertRange(value, [min, max], [0, num_width - thumb_size]) -
    (num_label_width - thumb_size) / 2;

  label.style.left = `${left}px`;
  label.innerHTML = value;
});

// https://gist.github.com/fpillet/993002
const convertRange = (value, r1, r2) =>
  ((value - r1[0]) * (r2[1] - r2[0])) / (r1[1] - r1[0]) + r2[0];
