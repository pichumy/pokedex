import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import itemsReducer from './items_reducer';
import { merge } from 'lodash';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
  items: itemsReducer
});

export default entitiesReducer;
