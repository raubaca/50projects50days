const contents = document.querySelectorAll('.content');
const tabs = document.querySelectorAll('nav li');

tabs.forEach((item, i) => {
  item.addEventListener('click', () => {
    hideAllContents();
    resetTabs();

    item.classList.add('active');
    contents[i].classList.add('show');
  });
});

const hideAllContents = () => {
  contents.forEach((content) => content.classList.remove('show'));
};

const resetTabs = () => {
  tabs.forEach((item) => item.classList.remove('active'));
};
