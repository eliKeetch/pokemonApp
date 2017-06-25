import React, { Component } from 'react';
import pokelogo from './newpokeball.png';
import pokeTitle from './pokeTitle.gif';
import pokedex from './pokedex.png';
import './App.css';

import {connect} from "react-redux";
import {setPokemon, pokemonDetails} from './ducks/pokemon';
import PokemonListing from './components/PokemonListing';
import PokemonData from './components/PokemonData/PokemonData';
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
     pokemon: {},
     showStats: false
    }
  }

  toggleStats() {
    this.setState(Object.assign({}, this.state, {showStats: !this.state.showStats}))
  }

componentDidMount() {
   this.props.setPokemon()
    
}


  render() {
  

    return (
      <div className="App">
        <div className="App-header">
          <div className="header-condoments">
          <img src={pokelogo} className="App-logo" alt="logo" />
          <div>
          <img src={pokeTitle} className="pokeTitle" alt="pokeTitle" />
          </div>
          <h1 className="test" >POKEDEX</h1>
          </div>
          
          
        </div>
        <div>
          

          <div className="pokemon-list-yo">
            {console.log(this.props.pokemon.results)}
              {this.props.pokemon.results.map((element, index)=>{
                return(
                  <PokemonListing pokemon={element} key={index} pokemonDetails={this.props.pokemonDetails} />
                )
              })}
              <button className="set-pokemon" onClick={() => this.props.setPokemon(this.props.pokemon.previous)}>Previous</button>
              <button className="set-pokemon" onClick={() => this.props.setPokemon(this.props.pokemon.next)}>Next</button>
              
          {console.log(this.props.pokemon.next)}
          </div>
          <div className="pokemon-display-case">
            <div className="pokeDiv">
            <img className="pokedexImg" src={pokedex} alt="Pokedex" />
            <button onClick={() => this.toggleStats()} className="pokedex-stat-btn"> STATS</button>
            <PokemonData selectedPokemon={this.props.selectedPokemon} showStats={this.state.showStats} />
            </div>
          
   
             
            
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state){
  return state;
}
export default connect(mapStateToProps, {setPokemon, pokemonDetails})(App);
// export default App;
