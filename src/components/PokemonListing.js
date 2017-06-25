import React, { Component } from 'react';
import AppCss from './../App.css';
class PokemonListing extends Component {
    render() {
        return (
            
            <div className="pokemon-list-card " onClick={() => this.props.pokemonDetails(this.props.pokemon.url)}>

                
                    <span className="enjoy-css pokemon-name"> {this.props.pokemon.name} </span>
                    
                    
            </div>
            
            
            
        );
    }
}


export default PokemonListing;