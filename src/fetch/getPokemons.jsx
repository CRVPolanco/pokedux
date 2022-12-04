import axios from 'axios';

const getPokemonDetails = async (url) => {
  return axios.get(url)
    .then(res => res.data)
    .catch(err => console.error(err));
}

export const getPokemons = async(dispatch, setPokemons) => {

  const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151');
  const data = await response.data.results;

  const detailedInfo = await Promise.all(data.map(p => getPokemonDetails(p.url)));
  const newData = [];

  for(let i=0; i<data.length; i++){
    newData.push({
      name: data[i].name,
      image: detailedInfo[i].sprites.front_default,
      types: detailedInfo[i].types.map(t => t.type.name)});
  };

  dispatch(setPokemons(newData));
}

