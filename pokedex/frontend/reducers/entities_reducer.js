import { combineReducers } from 'redux';
import pokemonReducer from './pokemon_reducer';
import { merge } from 'lodash';

const entitiesReducer = combineReducers({
  pokemon: pokemonReducer,
});

export default entitiesReducer; 
