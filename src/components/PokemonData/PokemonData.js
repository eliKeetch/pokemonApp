import React, { Component } from 'react';


class PokemonData extends Component {

// constructor(props) {
//     super(props);

//     this.state = {
//      pokemon: {} 
//     }
//   }

// componentDidMount() {
//    this.props.setPokemon()
    


    render() {
        console.log(this.props.showStats);
        return (
            <div>
            {this.props.selectedPokemon ? 
            <div>
                <div className="pokedex-image">
                <img className={this.props.showStats ? "img-size2 " : " img-size  "} src={this.props.selectedPokemon.sprites.front_shiny} />
                <div className={this.props.showStats ? "stats-div2" : "stats-div"}>
                    <div className="weight-height-spec">
                <p className="pokemon-p-details"><span className="item-bold">Weight:</span> {this.props.selectedPokemon.weight} KG </p>
                <p className="pokemon-p-details"><span className="item-bold">Height:</span> {this.props.selectedPokemon.height} M</p>
                <p className="pokemon-p-details"><span className="item-bold">Species:</span> {this.props.selectedPokemon.species.name} </p>
                </div>
                <div className="p-and-ul-div"><p className="pokemon-p"><span className="item-bold">Abilities:</span> <ul className="pokemon-ul">{this.props.selectedPokemon.abilities.map((element, index)=> {
                    console.log("inside ability map",  element.ability.name)
                    return (
                        
                        <li> {element.ability.name} </li>
                        
                    )
                    })} 
                    </ul></p></div>
                <div className="p-and-ul-div"><p className="pokemon-p"> <span className="item-bold">Stats:</span> <ul className="pokemon-ul">{this.props.selectedPokemon.stats.map((element, index)=> {
                    return (
                            <li><span className="">{element.stat.name}:</span> {element.base_stat}</li>
                    )
                    })}  
                    </ul></p> </div> 
                    {/*<button className="set-pokemon"> Show location on map</button>*/}

            </div>
                </div>
                
               
                <div className="name-container" >
               <h1 className="pokemon-title">{this.props.selectedPokemon.name}</h1>
               </div>

               
            </div>
            : ""}
            </div>
            
        );
    }
}
export default PokemonData;