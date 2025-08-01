const joke = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

const API_URL = 'https://icanhazdadjoke.com/'

const config = {
  headers: {
    Accept: 'application/json',
  },
}

const getJoke = async () => {
  try {
    const res = await fetch(API_URL, config)
    const data = await res.json()
    joke.textContent = data.joke
  } catch (error) {
    joke.textContent = 'There was an error :('
  }
}

getJoke()

jokeBtn.addEventListener('click', getJoke)
