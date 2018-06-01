import * as APIUtil from '../util/api_util';
export const RECEIVE_ALL_POKEMON = "RECEIVE_ALL_POKEMON";
export const RECEIVE_POKEMON = "RECEIVE_POKEMON";
export const NEW_POKEMON = "NEW_POKEMON";
export const receiveAllPokemon = pokemon => {
  return {
    type: RECEIVE_ALL_POKEMON,
    pokemon
  };
};

export const receivePokemonInformation = pokemon => {
  return {
    type: RECEIVE_POKEMON,
    pokemon
  };
};

export const receiveNewPokemon = poke => {
  return {
    type: NEW_POKEMON,
    poke
  };
};


export const requestAllPokemon = () => (dispatch) => (
  APIUtil.fetchAllPokemon()
    .then(pokemon => dispatch(receiveAllPokemon(pokemon)))
);

export const requestPokemonInformation = (pokemon) => (dispatch) => (
  APIUtil.fetchPokemonInformation(pokemon)
    .then(data => dispatch(receivePokemonInformation(data)))
);

export const makePokemon = (poke) => (dispatch) => (
  APIUtil.createPokemon(poke)
    .then(() => dispatch(receiveNewPokemon))
);
