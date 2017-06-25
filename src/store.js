import {createStore, applyMiddleware} from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import pokemon from './ducks/pokemon.js';


export default createStore(pokemon, undefined, applyMiddleware(promiseMiddleware()));