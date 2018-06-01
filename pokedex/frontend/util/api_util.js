export function fetchAllPokemon(){
  return $.ajax({
    method: "GET",
    url: "api/pokemon"
  });
}

export function fetchPokemonInformation(pokemon_id){
  return $.ajax({
    method: "GET",
    url: `api/pokemon/${pokemon_id}`
  });
}

export function createPokemon(poke){
  return $.ajax({
    method: "POST",
    url: `api/pokemon`,
    data: poke
  });
}
// export function receiveAllPokemon(pokemon){
//
// }
