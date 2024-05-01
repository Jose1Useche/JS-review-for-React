//Desestructuracion o Asignacion desestructurante.
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const { nombre: myname } = persona;
const { edad, clave, nombre } = persona;

// console.log(nombre);
// console.log(persona.edad);
// console.log(persona.clave);

const retornaPersona = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
    console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlong: {
            lat: 12.5584,
            long: -2.2555
        }
    }
}

const {nombreClave, anios, latlong: {lat, long}} = retornaPersona(persona);

console.log(nombreClave, anios, lat, long);