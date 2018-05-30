import { RECEIVE_ALL_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const initialState = {};

const pokemonReducer = (state = initialState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POKEMON:
      return action.pokemon;
    default: return state;
  }
};

export default pokemonReducer;
