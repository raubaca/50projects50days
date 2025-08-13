const API_URL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

const getUser = async (username) => {
  try {
    const { data } = await axios(API_URL + username);
    createUserCard(data);
    getRepos(username);
  } catch (error) {
    if (error.response.status == 404) {
      createErrorCard("No profile with this username");
    }
  }
};

const getRepos = async (username) => {
  try {
    const { data } = await axios(API_URL + username + "/repos?sort=created");
    addReposToCard(data);
  } catch (error) {
    if (error.response.status === 404) {
      createErrorCard("Problem fetching repos");
    }
  }
};

const createUserCard = (user) => {
  const { avatar_url, name, bio, followers, following, public_repos } = user;
  const cardHTML = `
    <div class="card">
      <div class="avatar"><img src=${avatar_url} alt=${name} /></div>
      <div class="user-info">
        <h2>${name}</h2>
        <p>${bio ?? "Nothing here..."}</p>
        <ul>
          <li>${followers} <strong>Followers</strong></li>
          <li>${following} <strong>Following</strong></li>
          <li>${public_repos} <strong>Repos</strong></li>
        </ul>
        <div id="repos"></div>
      </div>
    </div>
  `;
  main.innerHTML = cardHTML;
};

const createErrorCard = (message) => {
  const cardHTML = `
    <div class="card">
      <h1>${message}</h1>
    </div>
  `;
  main.innerHTML = cardHTML;
};

const addReposToCard = (repos) => {
  const reposEl = document.getElementById("repos");
  repos.slice(0, 10).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
