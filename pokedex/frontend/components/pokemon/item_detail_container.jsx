import { connect } from 'react-redux';
import { selectItem } from '../../reducers/selectors';
import { requestPokemonInformation } from '../../actions/pokemon_actions';
import ItemDetail from './item_detail';

const mapStateToProps = (state, ownProps) => ({
  item: selectItem(state.entities, ownProps.match.params.pokemonId, ownProps.match.params.itemId)
});

export default connect(mapStateToProps, null)(ItemDetail);
