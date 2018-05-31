import { connect } from 'react-redux';
import { selectPokemon, selectItems } from '../../reducers/selectors';
import { requestPokemonInformation } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state.entities, ownProps.match.params.pokemon_id),
  items: selectItems(state.entities, ownProps.match.params.pokemon_id)
});

const mapDispatchToProps = dispatch => ({
  requestPokemonInformation: (pokemon_id) => dispatch(requestPokemonInformation(pokemon_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
