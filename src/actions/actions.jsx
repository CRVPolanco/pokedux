import { SET_LOADING, SET_POKEMONS } from './types';
import { getPokemons } from '../fetch/getPokemons';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});

export const getPokemonsWithDetails = () => async (dispatch) => {

  const newPokemonsArray = await getPokemons();

  dispatch(setLoading(false));
  dispatch(setPokemons(newPokemonsArray));
}
