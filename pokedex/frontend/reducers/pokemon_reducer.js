import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON, NEW_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const initialState = {};

const pokemonReducer = (state = initialState, action) => {
  let newState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    case RECEIVE_POKEMON:
      newState[action.pokemon.pokemon.id] = action.pokemon.pokemon;
      newState = merge({}, state, newState);
      return newState;
    case NEW_POKEMON:
        return state;
    default: return state;
  }
};

export default pokemonReducer;
