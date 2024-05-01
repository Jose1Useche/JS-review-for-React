//Funciones en JS

const saludar = function(nombre) {
    return `Hola, ${nombre}`;
}

const saludar2 = nombre => {
    return `Hola, ${nombre}`;
}

const saludar3 = nombre => `Hola, ${nombre}`;

const getUser = () => {
    return {
        uid: 'abc',
        username: 'jose'
    }
}

const getUser2 = () => ({ uid: 'efg', username: 'juan' });

console.log(saludar('Goku'));
console.log(getUser2());

//Tarea
//1. Transformar a funcion de flecha
//2. Retornar un objeto implicito

function getUsuarioActivo(nombre) {
    return {
        uid: 'ABC567',
        username: nombre
    }
}

const getUsuarioActivo2 = username => ( { uid: 'Codigo culaquirra', username } )

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);

const usuarioActivo2 = getUsuarioActivo2('jose');
console.log(usuarioActivo2, usuarioActivo);