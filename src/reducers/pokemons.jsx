import { SET_LOADING, SET_POKEMONS, ADD_FAVORITES } from '../actions/types';

const initialState = {
  pokemons: [],
}

export const pokemonsReducer = (state = initialState, action) => {
  switch(action.type){
    case SET_POKEMONS:
      return{ ...state, pokemons: [...action.payload] }

    case ADD_FAVORITES:
      const pokeCopy = [...state.pokemons];

      const index = pokeCopy.findIndex(p => p.id === action.payload.id);
      if(index === -1) return state;

      pokeCopy[index].favorite = !pokeCopy[index].favorite;

      return { ...state, pokemons: [...pokeCopy] };
    default:
      return state;

  }
}
