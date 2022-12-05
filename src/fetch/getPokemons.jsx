import axios from 'axios';

const getPokemonDetails = async (url) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.error(err));
}

export const getPokemons = async () => {

  const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.data.results;

  const newPokemonsArray = [];

  const pokemonsDetailed = await Promise.all(
    data.map((p) => getPokemonDetails(p.url))
  );

  for(let i=0; i<data.length; i++){
    newPokemonsArray.push({
      name: data[i].name,
      image: pokemonsDetailed[i].sprites.front_default,
      types: pokemonsDetailed[i].types.map(t => t.type.name)});
  };

  return newPokemonsArray;
}

