import React from 'react';

const TYPES = [
  'fire',
  'electric',
  'normal',
  'ghost',
  'psychic',
  'water',
  'bug',
  'dragon',
  'grass',
  'fighting',
  'ice',
  'flying',
  'poison',
  'ground',
  'rock',
  'steel'
].sort.freeze

class PokemonForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      attack: "",
      defense: "",

    };

    this.update = this.update.bind(this);
  }

  update(property) {
     return e => this.setState({ [property]: e.target.value });
   }

  render() {
    return (
      <form>
        <select options={TYPES} value={this.state.type} onChange={() => this.update('type')}></select>

        <label> Name:
          <input type='text' value={this.state.name} onChange={() => this.update('name')}></input>
        </label>
        <label> Attack:
          <input type='text' value={this.state.name} onChange={() => this.update('attack')}></input>
        </label>
        <label> Defense:
          <input type='text' value={this.state.name} onChange={() => this.update('defense')}></input>
        </label>


      </form>
    );
  }

}
