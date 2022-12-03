import axios from 'axios';

const getPokemons = async(setPokemons) => {
  try{

    const response = await axios('https://pokeapi.co/api/v2/pokemon?limit=151&offset=0');
    const data = await response.data;

    setPokemons(data.results);

  }catch(error){

    console.error(error);

    return undefined;
  }
}

export default getPokemons;
