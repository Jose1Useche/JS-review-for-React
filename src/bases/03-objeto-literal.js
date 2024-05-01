const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 25645,
        lat: 14.2545565,
        long: -12.25456
    }
}; //Objeto Literal. Tambien son conocidos como diccionarios {key: value}

const persona2 = {...persona};
persona2.nombre = 'Jose';

console.log(persona, persona2);
// console.table(persona, persona2);