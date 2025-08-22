const API_URL = 'https://pokeapi.co/api/v2/pokemon/';

const COLORS = {
  bug: '#A6B91A',
  dark: '#705746',
  dragon: '#6F35FC',
  electric: '#F7D02C',
  fairy: '#D685AD',
  fighting: '#C22E28',
  fire: '#EE8130',
  flying: '#A98FF3',
  ghost: '#735797',
  grass: '#7AC74C',
  ground: '#E2BF65',
  ice: '#96D9D6',
  normal: '#A8A77A',
  poison: '#A33EA1',
  psychic: '#F95587',
  rock: '#B6A136',
  steel: '#B7B7CE',
  water: '#6390F0',
};

const COUNT = 150;

const container = document.getElementById('container');

const fetchPokemons = async () => {
  for (let i = 1; i <= COUNT; i++) {
    await getPokemon(i);
  }
};

const getPokemon = async (id) => {
  const res = await fetch(`${API_URL}${id}`);
  const data = await res.json();
  createPokemonCard(data);
};

const createPokemonCard = (pokemon) => {
  const image = pokemon.sprites.other.home.front_default;
  const name = pokemon.name;
  const id = pokemon.id.toString().padStart(4, '0');
  const types = pokemon.types.map((type) => type.type.name);

  const pokemonEl = document.createElement('article');
  pokemonEl.classList.add('pokemon');
  pokemonEl.style.backgroundColor = COLORS[types[0]];

  // Dual Type
  if (types.length > 1) {
    pokemonEl.style.backgroundImage = `linear-gradient(to right, ${
      COLORS[types[0]]
    } 50%, ${COLORS[types[1]]} 50%)`;
  }

  pokemonEl.innerHTML = `
    <div class="pokemon-image"><img src="${image}" alt="${name}" /></div>
    <div class="pokemon-info">
      <span class="pokemon-id">#${id}</span>
      <h3 class="pokemon-name">${name}</h3>
      <small class="pokemon-type">
        Type:
        <span>${types.join('/')}</span>
      </small>
    </div>
  `;

  container.appendChild(pokemonEl);
};

fetchPokemons();
