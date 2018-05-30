export function selectAllPokemon(state){
  let returnArray = [];
  Object.values(state.entities.pokemon).forEach( (pokemon) => {
    returnArray.push(pokemon);
  });
  return returnArray;
}
