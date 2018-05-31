import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash';

const initialState = {};

const itemsReducer = (state = initialState, action) => {
  let newState = {};
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_POKEMON:
      newState[action.pokemon.pokemon.id] = action.pokemon.items;
      newState = merge({}, state, newState);
      return newState;
    default: return state;
  }
};

export default itemsReducer;
