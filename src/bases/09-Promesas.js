import { getHeroeById } from './bases/08-imp-exp';

// const promesa = new Promise( (resolve, reject) => {
//     setTimeout(() => {
//         const personaje = getHeroeById(2);
//         if (personaje) {
//             resolve(personaje);
//         } else {
//             reject('No se pudo encontrar el heroe');
//         }
//     }, 2000);
// });

// promesa.then(heroe => {
//     console.log('Mi heroe: ', heroe.name);
// })
// .catch(err => {
//     console.warn(err);
// });

const getHeroeByIdAsync = id => {
    return new Promise( (resolve, reject) => {
        setTimeout(() => {
            const personaje = getHeroeById(id);

            if (personaje) {
                resolve(personaje);
            } else {
                reject('No se pudo encontrar el heroe');
            }
        }, 2000);
    });
}

// getHeroeByIdAsync(4).then(heroe => {
//     console.log('Mi heroe: ', heroe);
// })
// .catch(err => {
//     console.warn(err);
// });

getHeroeByIdAsync(4)
    .then(console.log)
    .catch(console.warn);
