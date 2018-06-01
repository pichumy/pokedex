import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Link, Route } from 'react-router-dom';

const styles = {
  poke:{
    fontSize: '15px',
    margin: 'auto',
    width: '300px',
    textAlign: 'center',
    padding: '25px'
  },
  img: {
    width: '100px',
  },
  li: {
    fontSize: '12px',
    width: '200px',
    padding: '10px'
  },
  div: {
    border: '1px solid black',
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
    margin: 'auto'
  },
  main_div: {
    border: '1px solid black',
    width: '500px',
    height: '250px',
    textAlign: 'center',
    fontSize: '20px',
    margin: 'auto'
  },
  text: {
    display: 'inline-block',
    margin: 'auto'
  }
};

class PokemonDetail extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      itemInformationIndex: undefined
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
     this.props.requestPokemonInformation(this.props.match.params.pokemon_id);
  }
  // i should be passed in a pokemon
  componentWillReceiveProps(newProps){
    if(this.props.match.params.pokemon_id !== newProps.match.params.pokemon_id){
      this.props.requestPokemonInformation(newProps.match.params.pokemon_id);
    }
  }
  handleClick (index) {
    this.setState({
      itemInformationIndex: index
    });
  }

  render(){
    const { pokemon, items } = this.props;
    if (pokemon && (Object.keys(pokemon).length !== 0) && items && (Object.keys(items).length !== 0)){

      const images = items.map((item, idx) => {
        const linkId = `/pokemon/${pokemon.id}/items/${item.id}`;
        return (
          <Link to= {linkId}>
            <img style = {styles.img} key={idx} src={item.image_url} />
          </Link>

        );
      });

      return(
        <ul>
          <div style = {styles.poke}>
            <img src={pokemon.image_url} />
            <li>Name: {pokemon.name}</li>
            <li>Attack: {pokemon.attack}</li>
            <li>Defence: {pokemon.defense}</li>
            <li>Type: {pokemon.poke_type}</li>
            <li>
              Moves: {pokemon.moves.join(',')}
            </li>
          </div>

          <div style = {styles.main_div}>
            Items
          <div style={styles.div}>
            {images}
          </div>
          <div style = {styles.text}>
            <Route path="/pokemon/:pokemonId/items/:itemId" component={ItemDetailContainer} />
          </div>
        </div>
        </ul>
      );
    }else{
      return (
        <div>
          loading
        </div>
      );
    }
  }

}

export default PokemonDetail;
