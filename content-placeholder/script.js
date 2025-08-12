const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const date = document.getElementById('date');

const animatedBgs = document.querySelectorAll('.animated-bg');
const animatedBgsText = document.querySelectorAll('.animated-bg--text');

const info = {
  headerImg:
    'https://images.unsplash.com/photo-1605979257913-1704eb7b6246?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9rZW1vbnxlbnwwfHwwfHx8MA%3D%3D',
  title: 'Lorem ipsum dolor sit amet.',
  excerpt:
    'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, nostrum.',
  profileImg:
    'https://images.unsplash.com/profile-1655717706573-ea4fafca3c30?auto=format&fit=crop&q=60&bg=fff&crop=faces&dpr=1&h=32&w=32',
  name: 'Michael Rivera',
  date: 'Nov 21, 2020',
};

const getData = () => {
  header.innerHTML = `<img src=${info.headerImg} alt="Pokémon" />`;
  title.textContent = info.title;
  excerpt.innerHTML = info.excerpt;
  profileImg.innerHTML = `<img src=${info.profileImg} alt="Profile pic" />`;
  name.textContent = info.name;
  date.textContent = info.date;

  animatedBgs.forEach((bg) => bg.classList.remove('animated-bg'));
  animatedBgsText.forEach((bg) => bg.classList.remove('animated-bg--text'));
};

setTimeout(getData, 2000);
