const personajes = ['Goku', 'Vegueta', 'Trunks'];
// console.log(personajes[0]);
// console.log(personajes[1]);
// console.log(personajes[2]);

const [, , p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros);

//TAREA
// 1. el primero valor del arreglo se llamara Nombre.Nombre
//2. el segundo se llamara setNombre

const miEstado = valor => {
    return [valor, () => console.log('Hola mundo')];
}

const [nombre, setNombre] = miEstado('Jose');

console.log(nombre);
setNombre();