import { SET_LOADING, SET_POKEMONS, ADD_FAVORITES } from '../actions/types';

const initialState = {
  pokemons: [],
  loading: false,
}

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_POKEMONS:
      return{ ...state, pokemons: [...action.payload] }

    case ADD_FAVORITES:

      const pokemonsCopy = [...state.pokemons];

      const currentPokemonIndex = pokemonsCopy.findIndex(p => p.id === action.payload.id);
      if(currentPokemonIndex < 0) return state;

      pokemonsCopy[currentPokemonIndex].favorite = !pokemonsCopy[currentPokemonIndex].favorite;

      return { ...state, pokemons: pokemonsCopy };

    case SET_LOADING:
      return{ ...state, loading: action.payload }

    default:
      return state;

  }
}
