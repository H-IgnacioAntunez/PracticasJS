/*

* Crear un algoritmo que devuelva cantidad
* de numeros positivos de un array

*/

let numeros= [-233,1500,-345,54,1,3,5,-2,-2344,34234];


function cuantosPositivos(arr){
    let cantidad = 0;
    for(numero of arr){
        if(numero>0){
            cantidad++;
        }
    }
    return cantidad;
}

resultado = cuantosPositivos(numeros);
console.log(resultado);