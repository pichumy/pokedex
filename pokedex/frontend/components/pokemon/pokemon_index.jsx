import React from 'react';

const styles = {
  img: {
    width: '50%',
  },
  li: {
    fontSize: '50px',
    width: '200px'
  }
};

class PokemonIndex extends React.Component{

  // constructor(props){
  //   super(props);
  // }
  componentDidMount(){
    this.props.requestAllPokemon();
  }

  render(){
    const pokemon = this.props.pokemon.map (poke => {
      return <li style= {styles.li} key={poke.id}> <img style={styles.img} src={poke.image_url}/> {poke.name} </li>;
    });

    return (
      <ul>
        {pokemon}
      </ul>
    );
  }
}

export default PokemonIndex;
