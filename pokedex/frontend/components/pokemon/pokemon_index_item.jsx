import React from 'react';
import { Link, Route } from 'react-router-dom';

const styles = {
  img: {
    width: '50%',
  },
  li: {
    fontSize: '50px',
    width: '200px'
  }
};

const PokemonIndexItem = (props) => {
  const linkId = `pokemon/${props.pokemon.id}`;
  return(
    <Link to={linkId}>
      <li style={styles.li}>
        <img style={styles.img} src={props.pokemon.image_url} /> {props.pokemon.name}
      </li>
    </Link>
  );
};

export default PokemonIndexItem;
