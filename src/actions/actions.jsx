import { SET_LOADING, SET_POKEMONS, ADD_FAVORITES } from './types';
import { getPokemons } from '../fetch/getPokemons';

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
});
export const setLoading = (payload) => ({
  type: SET_LOADING,
  payload,
});
export const addFavorites = (payload) => ({
  type: ADD_FAVORITES,
  payload,
})

export const getPokemonsWithDetails = () => async (dispatch) => {

  dispatch(setLoading(true));
  const newPokemonsArray = await getPokemons();
  dispatch(setLoading(false));

  dispatch(setPokemons(newPokemonsArray));
}
