/*

* Crear un array que devuelva un número
* menor y mayor  de un array

*/

let array=[402,-25,-5,2,19,24,103,-28,305];

function cualMenoryMayor(array){
    //Necesitamos un valor inicial para la comparacion
    let mayor = array[0];
    let menor = array[0];
    for(num of array){
        menor = menor < num ? menor : num;
        mayor = mayor > num ? mayor : num;
    }
    return [menor,mayor]
}

resultado = cualMenoryMayor(array);
console.log(resultado);