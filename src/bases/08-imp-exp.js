// import { heroes } from './data/heroes';
import { heroes } from "../data/heroes";

// console.log(heroes);

// const getHeroeById = id => {
//     return heroes.find(h => h.id === id);
// }

export const getHeroeById = id => heroes.find(h => h.id === id);

// console.log(getHeroeById(2));

// const getHeroeByOwner = owner => heroes.filter(h => h.owner === owner);

// console.log(getHeroeByOwner('DC'));