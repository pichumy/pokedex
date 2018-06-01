import {get, has} from 'lodash';

export function selectAllPokemon(state){
  let returnArray = [];
  Object.values(state.entities.pokemon).forEach( (pokemon) => {
    returnArray.push(pokemon);
  });
  return returnArray;
}

export function selectPokemon(state, pokemon_id){
  return state.pokemon[pokemon_id];
}

export function selectItems(state, pokemon_id){
  let returnArray = [];
  Object.values(state.items).forEach( (item) => {
    Object.values(item).forEach(actualItem => returnArray.push(actualItem));
  });
  return returnArray;
}

export function selectItem(state, pokemon_id, item_id){
  if (state.items && Object.keys(state.items).length !== 0)
    return state.items[pokemon_id][item_id];
  else
    return {};
}
