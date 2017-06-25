import axios from 'axios';
const initialState ={
    error: false,
    loading: false,
    search: false,
    pokemon: {results: []},
    selectedPokemon: null
};


const SET_POKEMON = "SET_POKEMON";
const POKEMON_DETAILS = "POKEMON_DETAILS";

export default function pokemon( state = initialState, action ){
    console.log("running reducer", action);
    switch(action.type){
        case SET_POKEMON + "_PENDING":
            return{
                error: false,
                loading: true,
                search: false,
                pokemon: {results: []}
            }
        case SET_POKEMON + "_FULFILLED":
            return{
                error: false,
                loading: false,
                search: false,
                pokemon: action.payload
            }
        case SET_POKEMON + "_REJECTED":
            return {
                error: true,
                loading: false,
                search: false,
                pokemon: {results: []}
            }
            case POKEMON_DETAILS + '_PENDING':
            return state
            case POKEMON_DETAILS + '_FULFILLED':
            return Object.assign({}, state, {selectedPokemon: action.payload})
        default: return state;
    }
}
export function setPokemon(url="http://pokeapi.co/api/v2/pokemon"){
    console.log("woring set pokemon")
    const promise = axios.get(url).then(response => response.data);
    return {
        type: SET_POKEMON,
        payload: promise
    }
}




export function pokemonDetails(url) {
    const promise = axios.get(url).then(response => response.data);
    return{
        type: POKEMON_DETAILS,
        payload: promise
    }
}