import React from 'react';

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

  handleClick (index) {
    this.setState({
      itemInformationIndex: index
    });
  }


  render(){
    if (this.props.pokemon){
      console.log(this.props);
      const {pokemon, items} = this.props;

      const images = items.map((item, idx) => {
        return (
          <img onClick = {() => this.handleClick(idx)} style = {styles.img} key={idx} src={item.image_url} />
        );
      });

      const itemInformation = items.map((item,idx) => {
        return (
          <div style={styles.li} key={idx}>
            <li>Name: {item.name}</li>
            <li>Price: {item.price}</li>
            <li>Happiness: {item.happiness}</li>
          </div>
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
            Moves:
            { pokemon.moves.map( (move, idx) => <li key={idx}>{move}</li>)}
          </div>

          <div style = {styles.main_div}>
            Items
          <div style={styles.div}>
            {images}
          </div>
          <div style = {styles.text}>
            {itemInformation[this.state.itemInformationIndex] ? itemInformation[this.state.itemInformationIndex] : []}
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
