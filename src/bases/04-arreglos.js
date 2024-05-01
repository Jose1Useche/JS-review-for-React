//Arreglos JS

// const arreglo = new Array(100); //Esto me crea un arreglo que contiene 100 campos, en este caso vacíos.
                                //Por lo general no trabajamos con arreglos de este estilo.

const arreglo = [1,2,3,4];
// arreglo2.push(1);
// arreglo2.push(2);
// arreglo2.push(3);
// arreglo2.push(4);

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(x => {
    return x * 2;
});

console.log(arreglo, arreglo2, arreglo3);