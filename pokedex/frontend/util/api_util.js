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
// export function receiveAllPokemon(pokemon){
//
// }
