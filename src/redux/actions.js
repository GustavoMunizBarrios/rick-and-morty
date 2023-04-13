import { ADD_FAV, REMOVE_FAV } from './action-types';

//Esta función recibe un personaje por parámetro. Retorna un payload que es igual al personaje
export const addFav = (character) => {
    return { type: ADD_FAV, payload: character }
};

//Esta función recibe un id por parámetro. Retorna un payload que es igual al id
export const removeFav = (id) => { 
    return { type: REMOVE_FAV, payload: id }
}